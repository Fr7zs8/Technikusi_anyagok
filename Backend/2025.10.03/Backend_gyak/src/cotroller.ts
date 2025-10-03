import data from "./data";
import {Request, Response} from "express";
import Dog from "./dog";

export function root(_req:Request, res:Response){
    res.send("A szerver fut.");
}

export function getAllData(_req:Request, res:Response){
    res.status(200).send(data);
}

export function getDataFromId(req:Request,res:Response){
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        res.status(400).send({error: 103, message: "Hibás formátumú azonositó."})
        return;
    }
    const index = keresesId(data, id);

    if (index !== -1) {
        res.status(200).send(data[index]);
    } else {
        res.status(404).send({ message: "Nincs ilyen ID." });
    }
}

function keresesId(data:any, id:Number){
    let i = 0;
    let talalat = false;
    while(i<data.length && !talalat){
        if (data[i].id === id) {
        talalat = true;
        } 
        else {
            i++;
        }
    }
    return talalat ? i: -1;
}

function maximumKivalasztas(data:any){
    let max = 0;
    for(let i = 0; i< data.length; i++){
        if(data[i].id > max){
            max = data[i].id;
        }
    }
    return max;
}


export function innsertData(req:Request, res:Response){

    if(!req.body){
        res.status(400).send({error: 102, message:"Nem küldte el az adatokat megfelelöen."});
        return;
    }

    let dog:Dog = new Dog(req.body);
    console.log(dog);

    if(dog.nev === ""|| dog.fajta === ""){
        res.status(400).send({error: 102, message:"Nem küldte el az adatokat megfelelöen."});
        return;
    }

    dog.id = maximumKivalasztas(data) + 1;
    data.push(dog)
    res.status(201).send({sucess: "Sikeres adatrögzités", data: dog});
}

export function deleteDataFromId(req:Request, res:Response){
    const id:number = parseInt(req.params.id);
    if(isNaN(id)){
        res.status(400).send({error: 400, message: "Hibás formátumú azonositó."})
        return;
    }

    const index = data.findIndex(i => i.id === id )    
    if (index === -1) {
       res.status(404).send({error: 404, message: "Nem található elem"});
       return
    }
    data.slice(index, 1)

        
    res.status(204).send();
    
}

export const putData = (req:Request, res:Response) =>{
    const id:number = parseInt(req.params.id);
    if(isNaN(id)){
        res.status(400).send({error: 400, message: "Hibás formátumú azonositó."})
        return;
    }

    if(!req.body){
        res.status(400).send({error: 102, message:"Nem küldte el az adatokat megfelelöen."});
        return;
    }

    const index = data.findIndex(i => i.id === id )    
    if (index === -1) {
        innsertData(req, res);
        return
    }

    let dog:Dog = new Dog(req.body);
    if(dog.nev === ""|| dog.fajta === ""){
        res.status(400).send({error: 102, message:"Nem küldte el az adatokat megfelelöen."});
        return;
    }

    dog.id = id;
    data[index] = dog;
    console.log(data);
    console.log(dog)

    res.status(201).send(data);

}


export const patchData = (req:Request, res:Response) =>{
    const id:number = parseInt(req.params.id);
    if(isNaN(id)){
        res.status(400).send({error: 400, message: "Hibás formátumú azonositó."})
        return;
    }

    if(!req.body){
        res.status(400).send({error: 102, message:"Nem küldte el az adatokat megfelelöen."});
        return;
    }

    const index = data.findIndex(i => i.id === id )    
    if (index === -1) {
        res.status(404).send({error: 404, message: "Nem található elem"});
        return
    }

    //let dog: Dog = new Dog(req.body as unknown as IDog);

    //data[index].nev = dog.nev || data[index].nev;
    //data[index].fajta = dog.fajta || data[index].fajta;
    //data[index].nem = dog.nem || data[index].nem;
    //data[index].eletkor = dog.eletkor || data[index].eletkor;
    //data[index].kepUrl = dog.kepUrl || data[index].kepUrl;

    
    // Object.assign(data[index], {
    //     nev: dog.nev || data[index].nev,
    //     fajta: dog.fajta || data[index].fajta,
    //     nem: dog.nem || data[index].nem,
    //     eletkor: dog.eletkor || data[index].eletkor,
    //     kepUrl: dog.kepUrl || data[index].kepUrl
    // })

    
    // for(const key in dog){
    //     const k = key as keyof Dog
    //     if(dog[k] !== undefined){
    //         data[index][key] = dog[k]
    //     }
    // }

    //data[index] = {...data[index], ...dog}

    applyPatch(data[index], req.body as Partial<Dog>)

    res.status(201).send(data);

}

function applyPatch<T extends object>(target: T, patch: Partial<T>){
    (Object.keys(patch) as Array<keyof T>).forEach((k) => {
        const v = patch[k];
        if(v !== undefined && v !== null && v !== ''){
            target[k] = v as T[typeof k];
        } 
    })
}

