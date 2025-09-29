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
        res.status(400).send("Nem küldte el az adatokat megfelelöen.");
        return;
    }

    let dog:Dog = new Dog(req.body);
    console.log(dog);

    if(dog.nev === ""|| dog.fajta === ""){
        res.status(400).send("Nem küldte el az adatokat megfelelöen.");
        return;
    }

    dog.id = maximumKivalasztas(data) + 1;
    data.push(dog)
    res.status(201).send("Sikeres adatrögzités");

    

}