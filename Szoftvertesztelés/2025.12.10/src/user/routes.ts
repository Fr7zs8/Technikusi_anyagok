import { Router } from "express"
import { avatarChange, register, signIn } from "../user/userController"
import verifyToken from "../middleware/auth";

const router: Router = Router()
router.post('/user/login', signIn);
router.post('/user/regist', register);
router.put("/user/avatarChange", verifyToken, avatarChange);

export default router