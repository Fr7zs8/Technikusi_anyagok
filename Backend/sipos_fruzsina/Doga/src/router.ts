import {Router} from "express";
import {deleteData, getAllData, getDataFromId, postData, putData, root} from "./controller";

const router:Router = Router();

router.get("/", root);
router.get("/api/auto", getAllData);
router.get("/api/auto/:id", getDataFromId);
router.post("/api/auto", postData);
router.delete("/api/auto/:id", deleteData);
router.put("/api/auto/:id", putData);

export default router;