import jwt from "jsonwebtoken";
import config from "./config";

const verifyToken = (req:any, res:any, next:any) =>{
    const token = req.body?.token || req.query?.token || req.headers?.['x-acces-token'];
    if(!token){
        return res.status(403).send("Token szükséges");
    }
    try{
        if(!config.jwtSecret){
            return res.status(403).send("Hiba van a tiitks kulcsal");
        }
        const decodedToken = jwt.verify(token, config.jwtSecret)
        req.user = decodedToken
        return next();
    }
    catch(e){
        console.log(e);
    }
    res.status(401).send("Az auth sikertelen.")
}

export default verifyToken;
