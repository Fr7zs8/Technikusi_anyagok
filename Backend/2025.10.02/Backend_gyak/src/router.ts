import {Router} from "express";
import { getAllData, getDataFromId, root, innsertData, deleteDataFromId } from "./cotroller";

const router: Router = Router();

router.get("/", root);
router.get("/dogs", getAllData);
router.get("/dogs/:id", getDataFromId);
router.post("/dogs", innsertData);
router.delete("/dogs/:id", deleteDataFromId);

export default router;