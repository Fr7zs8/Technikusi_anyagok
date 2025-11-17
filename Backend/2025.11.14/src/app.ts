import router from "./router";
import express from "express";

const app = express();

app.use("/", router);

export default app;