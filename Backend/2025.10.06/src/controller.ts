import data from "./data";
import {Request, Response} from "express";
import Products from "./products";

export function root(_req:Request, res:Response){
    res.send("A szerver fut");
}

export function getAllData(_req:Request, res:Response){
    res.status(201).send(data);
}

export function getDataFromId(req:Request, res:Response){
    const id = Number(req.params.id);
    if(id === undefined || id === null || isNaN(id)){
        res.status(401).send("Hibás adat");
        return
    }
    const result = data.find((index) => index.id === id)
    if(result){
        res.status(201).send(result);
        return
    }
    
    res.status(404).send("Nincs ilyen id");
}

export function innsertData(req:Request, res:Response){
    if(!req.body){
        res.status(401).send("nem adtál meg semmit.")
        return
    }

    let newdata = req.body;

    newdata.id = Math.max(...data.map(e =>e.id as number)) + 1;
    data.push(newdata);
    res.status(201).send(data);

}

export function deleteDataFromId(req:Request, res:Response){
    const id = Number(req.params.id);
    if(id === undefined || id === null || isNaN(id)){
        res.status(401).send("Hibás adat");
        return
    }
    const result = data.findIndex((index) => index.id === id)
    if(result === -1){
        res.status(404).send("Nincs ilyen index");
        return;
    }
    data.splice(result, 1);
    res.status(201).send(data);
}

export function putData(req:Request, res:Response){
    const id = Number(req.params.id);
    
    if(id === undefined || id === null || isNaN(id)){
        res.status(401).send("Hibás adat");
        return
    }

    if(!req.body){
        res.status(401).send("Nem adtál meg semmit.")
        return
    }

    const result = data.findIndex((index) => index.id === id)

    if(result === -1){
        innsertData(req, res);
        return;
    }
    let product: Products = new Products(req.body as Products);

    product.id  = result as number;
    Object.assign(data[result],product as Partial<Products>);
    res.status(201).send(data);
}

export function patchdata(req:Request, res:Response){
    const id = Number(req.params.id);

    if(id === undefined || id === null || isNaN(id)){
        res.status(401).send("Hibás adat");
        return
    }

    if(!req.body){
        res.status(401).send("Nem adtál meg semmit.")
        return
    }

    const result = data.findIndex((index) => index.id === id)

    if(result === -1){
        res.status(404).send("Nem található ilyen Id.")
        return;
    }

    applyPatch(data[result], req.body as Partial<Products>)

    res.status(201).send(data)
    
}

function applyPatch<T extends object>(target: T, patch: Partial<T>) {
    (Object.keys(patch) as Array<keyof T>).forEach((k) => {
      const v = patch[k];
      if (v !== undefined && v !== null && v !== '') {
        target[k] = v as T[typeof k];
      }
    })
  }