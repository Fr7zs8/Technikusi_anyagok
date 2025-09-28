import data from "./data";
import {Request, Response} from "express";

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
