import { Request, Response } from "express";
import mysql from "mysql2/promise";
import config from "./config";

export function root(_req:Request, res:Response){
    res.send("A szerver fut.");
}

export async function getAllPet(_req:Request, res:Response) {
    const connect = await mysql.createConnection(config.database);

    try{
        const [results] = await connect.query("SELECT * FROM pet") as Array<any>;
        if(results.length > 0){
            res.status(200).send(results);
            return;
        }
        res.status(404).send("Nincs elem.");
    }
    catch (e){
        console.log(e);
    }
}

export async function getPetById(req:Request, res:Response) {
    const id:Number = Number(req.params.id); 
    const connect = await mysql.createConnection(config.database);

    try{
        const [results] = await connect.query("SELECT * FROM pet WHERE id = ?", [id]) as Array<any>;
        if(results.length > 0){
            res.status(200).send(results);
            return;
        }
        res.status(404).send("Nincs elem.");
    }
    catch (e){
        console.log(e);
    }
}


export async function deletePet(req:Request, res:Response) {
    const id:Number = Number(req.params.id); 
    const connect = await mysql.createConnection(config.database);

    try{
        const [results] = await connect.query("DELETE FROM pet WHERE id = ?", [id]) as Array<any>;
        if(results.affectedRows > 0){
            res.status(204).send("");
            return;
        }
        res.status(404).send("A kisállat nem létezik.");
    }
    catch (e){
        console.log(e);
    }
}

export async function postpet(req:Request, res:Response) {
    const elem = req.body;

    if(!elem){
        res.status(404).send("Nem adta meg a body-t.");
        return;
    }

    if(elem.nev === "" || elem.nev === undefined || elem.nev === null || elem.leiras === "" || elem.leiras === undefined || elem.leiras === null || elem.ar === "" || elem.ar === undefined || elem.ar === null || elem.raktaron === "" || elem.raktaron === undefined || elem.raktaron === null || elem.kep === "" || elem.kep === undefined || elem.kep === null){
        res.status(404).send("Nem adott meg egy kötelező adatot.");
        return;
    }

    const connect = await mysql.createConnection(config.database);

    try{
        const [results] = await connect.query("INSERT INTO pet (nev, leiras, ar, raktaron, kep) VALUES(?,?,?,?,?)", [elem.nev, elem.leiras, parseInt(elem.ar), parseInt(elem.raktaron), elem.kep]) as Array<any>
        if(results.affectedRows > 0){
            res.status(201).send(`id = ${results.insertId}`);
            return;
        }
        res.status(404).send("Nincs elem.");
    }
    catch (e){
        console.log(e);
    }
}

export async function putPet(req:Request, res:Response) {
    const id:Number = Number(req.params.id);
    const elem = req.body;

    if(!id){
        res.status(400).send("Az adatok nem megfelelőek");
        return;
    }

    if(!req.body){
        res.status(400).send("Az adatok nem megfelelőek");
        return;
    }
    
    const allowfields = ["nev", "leiras", "ar", "raktaron", "kep"];

    const keys = Object.keys(elem).filter(key => allowfields.includes(key));
    if(!keys){
        res.status(400).send("Az adatok nem megfelelőek");
        return;
    }

    const udpatestring = keys.map(key => `${key} = ?`).join(', ');
    
    const values = keys.map(key  => elem[key]);
    values.push(id);
    const query = `UPDATE pet SET ${udpatestring} WHERE id = ?`
    
    const connect = await mysql.createConnection(config.database);
    try{
        const [results] = await connect.query(query,values) as Array<any>;
        if(results.affectedRows > 0){
            res.status(201).send("Sikeres módosítás");
            return;
        }
        else{
            postpet(req, res);
        }
        
    }
    catch (e){
        console.log(e);
    }
}