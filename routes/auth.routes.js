import { Router} from "express"
import {regUsuario, 
        logUsuario 
} from "../controllers/auth.controller.js"

const router = Router();

router.get("/auth/login", logUsuario)
router.post("/auth/register", regUsuario)


export default router;