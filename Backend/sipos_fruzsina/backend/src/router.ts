import {Router} from "express";
import {deletePet, getAllPet, getPetById, postpet, putPet, root } from "./controller";

const router:Router = Router();
router.get("/", root);
router.get("/api/pet", getAllPet);
router.get("/api/pet/:id", getPetById);
router.delete("/api/pet/:id", deletePet);
router.post("/api/pet", postpet);
router.put("/api/pet/:id", putPet);

export default router;