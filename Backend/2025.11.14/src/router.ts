import { Router } from "express";
import { getAllData } from "./controller";

const router:Router = Router();

router.get("/", getAllData)

export default router;