import {Router} from "express";
import { getAllData, getDataFromId, root, innsertData } from "./cotroller";

const router: Router = Router();

router.get("/", root);
router.get("/dogs", getAllData);
router.get("/dogs/:id", getDataFromId);
router.post("/dogs", innsertData)

export default router;