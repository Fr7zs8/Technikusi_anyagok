import express from "express";
import router from "./router";
import bodyParser from "body-parser";

const app = express();

app.use(express.json()); //Saját expressnem van json feloldása ez az alap beépített
app.use(bodyParser.urlencoded({extended: true})) //Enélkül nemtudsz a törzs adatokra hivatkozni
app.use(bodyParser.json()) //bodyparser csomagban json feloldás
app.use("/", router);

export default app;