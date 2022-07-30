import { Router } from "express";
import {
  getPeliculasOSeries,
  getPeliculaOSerie,
  createPeliculasOSeries,
  updatePeliculasOSeries,
  deletePeliculasOSeries,
} from "../controllers/peliculaoserie.controller.js";

const router = Router();

router.get("/movies", getPeliculasOSeries);
router.get("/movie/:titulo", getPeliculaOSerie);
router.post("/peliculaoserie", createPeliculasOSeries);
router.put("/peliculaoserie/:titulo", updatePeliculasOSeries);
router.delete("/peliculaoserie/:titulo", deletePeliculasOSeries);

export default router;
