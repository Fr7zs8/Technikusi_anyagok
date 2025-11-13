import {Request, Response} from "express";
import Dog , {IDog} from "./dog";
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
        ) as Array<any>;

        if(results.length > 0){{
           res.status(200).send(results);
           return;
        }}
        res.status(404).send({ message: "Nincs semmilyen elem." });
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
            //CREATE Table dog(id int AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL, breed VARCHAR(100) not NULL, gender BOOLEAN DEFAULT false, age int, picurl VARCHAR(255))
            'INSERT INTO dog VALUES(null,?,?,?,?,?)' , [dog.name, dog.breed, dog.gender ? 0:1, (dog.age as unknown as string), dog.picurl]
        ) as Array<any>;

        if(results.affectedRows > 0)
        {
            res.status(201).send({ message: "Sikeres adatrögzités az id-ja : " + results.insertId});
            return;
        }        
        res.status(404).send({ message: "Sikertelen adat rögzítés." });
        
    }
    catch (err) {
        console.log(err)
    }

}

export async function deleteDataFromId(req:Request, res:Response){
    const id:number = parseInt(req.params.id);
    if(isNaN(id)){
        res.status(400).send({error: 400, message: "Hibás formátumú azonositó."})
        return;
    }

    const connection = await mysql.createConnection(config.database);
    try {
        const [results] = await connection.query(
            'delete from dog where id = ?', [id]
        ) as Array<any>;

        if(results.affectedRows > 0)
        {
            res.status(204).send({ message: `Sikeresen törölte ${results.affectedRows} elemet.`});;
            return;
        }
    }
    catch (err) {
        console.log(err)
    }
    res.status(404).send({ message: "Sikertelen törlés." });
    
}
/*
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

*/
export  const patchData = async (req:Request, res:Response) =>{
    const id:number = parseInt(req.params.id);
    if(isNaN(id)){
        res.status(400).send({error: 400, message: "Hibás formátumú azonositó."})
        return;
    }

    if(!req.body){
        res.status(400).send({error: 102, message:"Nem küldte el az adatokat megfelelöen."});
        return;
    }

    const dog:any = new Dog(req.body as IDog);

    const allowedFields = ['name', 'breed', 'gender', 'age', 'picUrl'];
    const keys = Object.keys(dog).filter(key => allowedFields.includes(key));

    if(keys.length === 0){
        res.status(400).send({error: 103, message:"Nem küldte el az adatokat megfelelöen."});
        return;
    }

    const updatestring = keys.map(k => `${k} = ?`).join(", ")
    const values =keys.map(k => dog[k])
    values.push(id);

    const sql = `update dog set ${updatestring} where id = ?`;
    console.log(sql);

    try {
        const connection = await mysql.createConnection(config.database);

        const [results] = await connection.query(
            sql, values
        ) as Array<any>;

        if(results.affectedRows > 0)
        {
            res.status(204).send({ message: `Sikeresen modosította ${results.affectedRows} elemet.`});;
            return;
        }
    }
    catch (err) {
        console.log(err)
    }

}
/*
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