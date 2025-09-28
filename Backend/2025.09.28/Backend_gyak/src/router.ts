import {Router} from "express";
import { getAllData, getDataFromId, root } from "./cotroller";

const router: Router = Router();

router.get("/", root);
router.get("/dogs", getAllData);
router.get("/dogs/:id", getDataFromId);

export default router;