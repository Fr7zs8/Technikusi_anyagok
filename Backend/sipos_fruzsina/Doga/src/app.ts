import router from "./router";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors"

const app = express();

app.use(cors({origin: "*"}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.use("/", router);

export default app;