import data from "./data"
import { Request, Response } from "express"

export function root(_req:Request,res:Response) {
    res.send("Fut a szerver")

}


export function getAllData(_req:Request,res:Response) {

    res.status(200).send(data)

}

export function getDataFromId(req:Request, res:Response){
    const id = parseInt(req.params.id);
    const result = data.find(i => i.id === id);
    if(result){
        res.status(200).send(result);
        //return
    }
    res.status(404).send("Nincs ilyen elem");
    
}

/*
function kereses(id:Number){
    let i = 0;
    while(i<data.length, id=== data.id){
        i++;
    }
    if(id=== data.id){
        return id;
    }
    else{
        return 
    }
}*/

export function insertData(req:Request, res:Response){
    //const dog = 
    //data.push(...dog);
    console.log(req.body);
    res.status(404).send("Nincs ilyen elem");
    
}