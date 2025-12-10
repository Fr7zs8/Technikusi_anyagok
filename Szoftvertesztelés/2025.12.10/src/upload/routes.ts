import { Router } from "express"
import { getFileList, downloadFile, uploadFile, uploadFileMiltiple } from "../upload/uploadControler"
import verifyToken from "../middleware/auth";

const router: Router = Router()
router.get('/files', verifyToken, getFileList);
router.get('/file/:id', verifyToken, downloadFile);
router.post('/file/upload', verifyToken, uploadFile);
router.post('/files/upload', verifyToken, uploadFileMiltiple);

export default router