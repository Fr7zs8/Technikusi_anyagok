import router from "./router";
import cors from "cors";
import bodyparser from "body-parser"
import express from "express";

const app = express();

app.use(express.json());
app.use(bodyparser.json());
app.use(cors({origin: "*"}));
app.use(bodyparser.urlencoded({extended: true}));

app.use("/", router);

export default app;