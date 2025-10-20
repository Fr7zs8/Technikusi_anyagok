import data from "./data";
import {Request, Response} from "express";

function maxKeres(){
    let max = Number(data[0]?.id);
    for(let i of data){
        if(max < i.id){
            max = i.id;
        }
    }
    return max;
}

export function root(_req:Request, res:Response){
    res.send("A szerver fut.");
}

export function getAllData(_req:Request, res:Response){
    res.status(201).send(data);
}

export function getDataFromId(req: Request, res:Response){
    const id = Number(req.params.id);

    if(!id){
        res.status(400).send({Error: "Nem adott meg id-t."});
        return;
    }

    const result = data.find(ins => ins.id === id);
    if(!result){
        res.status(400).send({Error: "Nem létezik ilyen id-jú elem."});
        return;
    }

    res.status(201).send(result);
}

export function postData(req:Request, res:Response){
    const newdata = req.body;

    if(!newdata){
        res.status(400).send({Error: "Nem adott meg semmit a body-ban."})
        return;
    }

    if(newdata.tipus === undefined || newdata.rendszam === undefined || newdata.evjarat === undefined || newdata.szin === undefined){
        res.status(400).send({Error: "Nem adta meg az adatokat megfelelően valami hiányzik."});
        return;
    }

    newdata.id = maxKeres() + 1;
    data.push(newdata);
    res.status(201).send({Succes: data});

}

export function deleteData(req:Request, res:Response){
    const id = Number(req.params.id);

    const result = data.findIndex(ins => ins.id === id);

    if(result === -1){
        res.status(404).send("Az auto nem létezik.");
        return;
    }

    data.splice(result, 1);
    res.status(204).send();

}

export function putData(req:Request, res:Response){
    const id = Number(req.params.id);
    const elem = req.body;

    if(!req.body){
        res.status(404).send({Error: "Az elem nem létezik."})
        return;
    }

    const result = data.findIndex(ins => ins.id === id);

    if(result === -1){
        postData(req, res);
        res.status(201).send({Succes: "Sikeres modosítás"});
        return;
    }

    if(data[result] === undefined){
        res.status(400).send({Error: "Az adatok nem megfelelöek."});
        return;
    }

    elem.id = id;
    data[result].tipus = elem.tipus || data[result].tipus
    data[result].rendszam = elem.rendszam || data[result].rendszam
    data[result].evjarat = elem.evjarat || data[result].evjarat
    data[result].szin = elem.szin || data[result].szin

    res.status(201).send({Success: "Sikeres módosítás."});
    

}