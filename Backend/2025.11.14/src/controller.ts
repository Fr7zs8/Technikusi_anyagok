import { Request, Response } from "express";

export function getAllData(_req:Request, res:Response){
    res.send("Hello");
}