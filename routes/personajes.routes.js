import { Router } from "express";
import {
  getPersonajes,
  getPersonaje,
  createPersonajes,
  updatePersonaje,
  deletePersonaje,
} from "../controllers/personaje.controller.js";

const router = Router();

router.get("/characters", getPersonajes);
router.get("/character/:nombre", getPersonaje);
router.post("/personaje", createPersonajes);
router.put("/personaje/:nombre", updatePersonaje);
router.delete("/personaje/:nombre", deletePersonaje);

export default router;
