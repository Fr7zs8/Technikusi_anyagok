//import data from "./data";
import {Request, Response} from "express";
import Dog from "./dog";
import config from "./config";
import mysql from "mysql2/promise";

export function root(_req:Request, res:Response){
    res.send("A szerver fut.");
}

export async function getAllData(_req:Request, res:Response){
    const connection = await mysql.createConnection(config.database);
    try {
        const [results] = await connection.query(
            'SELECT * FROM `dog`'
        );
        res.status(200).send(results);
        } 
    catch (err) {
        console.log(err);
    }
}


export async function getDataFromId(req:Request,res:Response){
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        res.status(400).send({error: 103, message: "Hibás formátumú azonositó."})
        return;
    }

    const connection = await mysql.createConnection(config.database);
    try {
        const [results] = await connection.query(
            'SELECT * FROM `dog` WHERE  `id` = ? ',
            [id]
        ) as Array<any>;

        if(results.length > 0){{
           res.status(200).send(results);
           return;
        }}
        res.status(404).send({ message: "Nincs ilyen elem." });
        
    }
    catch (err) {
        res.status(404).send({ message: "Nincs ilyen ID." });
    }
}


export async function innsertData(req:Request, res:Response){
    if(!req.body){
        res.status(400).send({error: 102, message:"Nem küldte el az adatokat megfelelöen."});
        return;
    }

    let dog:Dog = new Dog(req.body);

    const connection = await mysql.createConnection(config.database);
    try {
        const [results] = await connection.query(
            'INSERT INTO dog (id, nev, fajta, nem, eletkor, kepUrl) VALUES(null,?,?,?,?,?)' , [dog.nev, dog.fajta, dog.nem as boolean, dog.eletkor, dog.kepUrl]
        ) as Array<any>;

        console.log(results);
        
        res.status(404).send({ message: "Nincs ilyen elem." });
        
    }
    catch (err) {
        console.log(err)
    }

    //res.status(400).send({error: 102, message:"Nem küldte el az adatokat megfelelöen."});
        
    //res.status(201).send({sucess: "Sikeres adatrögzités", data: dog});
}
/*
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
//Generikus függvény attol függetlenül használható hogy mi van mőgőtte T tipus target - mit akar modositani, patch egy részhalmaza a T nek, object keyekből kiemelem a kulcsokat amik srgitségével végig iterálok a patchen, kiveszem az értéket és megvizsgálom. az eredeti tipusom kulcsértékeit T ként definiálom
*/