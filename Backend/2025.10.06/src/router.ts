import {Router} from "express";
import {root, getAllData, getDataFromId, innsertData, deleteDataFromId, putData, patchdata} from "./controller";

const router:Router = Router();

router.get("/", root);
router.get("/storage", getAllData);
router.get("/storage/:id", getDataFromId);
router.post("/storage", innsertData);
router.delete("/storage/:id", deleteDataFromId);
router.put("/storage/:id", putData);
router.patch("/storage/:id", patchdata)
export default router;