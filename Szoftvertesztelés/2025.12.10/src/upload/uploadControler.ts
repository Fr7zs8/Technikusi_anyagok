import { Request, Response } from "express"
import dotenv from "dotenv"
import config from "../config/config";
//import fs from "fs"
import { File, IFile, IMulterFile } from "../file/file";
import mysql from "mysql2/promise"
import { uploadMiddleware, uploadMiddlewareMultiple } from "../middleware/upload";
dotenv.config();

export async function getFileList(req: any, res:any){
    //const dirPath = config.baseDir + config.uploadDir;

    const connection = await mysql.createConnection(config.database);

    try {
        const [results]: any = await connection.query(
            'SELECT * FROM files JOIN userFiles ON userFiles.fileId = files.fileId where userFiles.userId = ? ', [req.user.userId]
        ) as Array<any>

        if(results.length === 0){
            return res.status(200).send("Nincs megjelenithető adat.");
        }

        const fileInfos :any[] = []

        results.map((file: IFile) => {
            fileInfos.push({name: file.fileName, url: "http://localhost:3000/file/" + file.fileId})
        })

        
        res.status(200).send(fileInfos);

    } catch (err) {
        console.log(err);
    }

    // fs.readdir(dirPath, function (err, files){
    //     if(err){
    //         res.status(500).send({message: "Hiba a filelok olvasásáakor."})
    //     }
    //     const fileInfos:any[] = []
    //     files.forEach(file => {
    //         fileInfos.push({name: file, url: "http://localhost:3000/files" + file})
    //     });
    //     res.status(200).send(fileInfos);
    // })
    
}

export async function downloadFile(req:Request, res:Response){
    const filename: string = req.params.id;
    const dirPath = config.baseDir + config.uploadDir;

    const connection = await mysql.createConnection(config.database);

    try {
        const [results] = await connection.query(
            'SELECT fileName FROM files where fileId = ? ', [filename]
        ) as Array<any>

        if(results.length === 0){
            res.status(500).send("Nincs meg a file");
            return;
        }

    res.download(dirPath + filename, results[0].fileName, (err: any)=> {
        if(err){
            res.status(500).send({error: "A file nem tölthető le." + err})
        }
    })
    }
    catch (e){
        console.log(e);
    }
}

export async function uploadFile(req:any, res:any){
    try{
        await uploadMiddleware(req, res)

        if(!req.file){
            return res.status(400).send({error: "Töltsön fel filet."})
        }

        const file: File = new File(req.file, req.user.userId);

        await file.saveToDatabase();

        return res.status(200).send({message: "A fájl feltöltése sikerült!" + req.file?.originalname})
    }
    catch (e){
        return res.status(500).send({
            error: "A file me tölthető fel." + req.file?.originalname + " "+ e
        })
    }
}

export async function uploadFileMiltiple(req:any, res:any){
    try{
        await uploadMiddlewareMultiple(req, res)

        if(!req.files){
            return res.status(400).send({error: "Töltsön fel filet."})
        }

        const badFile: any[] = []

        await Promise.all(
            req.files.map( async (file: IMulterFile) => {
            const newfile: File = new File(file, req.user.userId);
            try{
                await newfile.saveToDatabase();
            }
            catch (e){
                badFile.push(file)
            }
        }))

        const diff = req.files.filter((itemA: any) => !badFile.some(itemB => itemB.filename === itemA.filename))
        return res.status(200).send({message: "A fájl feltöltése sikerült!" + diff})
    }
    catch (e){
        return res.status(500).send({
            error: "A file nem tölthető fel." + req.files + e
        })
    }
}

