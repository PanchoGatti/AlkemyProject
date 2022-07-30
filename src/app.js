import express from "express";
import personajesRoutes from "../routes/personajes.routes.js";
import peliculaoserieRoutes from "../routes/peliculasoseries.routes.js"
import authRoutes from "../routes/auth.routes.js"

const app = express();

//middleware

app.use(express.json());

app.use(authRoutes)
app.use(personajesRoutes);
app.use(peliculaoserieRoutes)

export default app;
