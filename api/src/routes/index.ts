import { Router } from "express";
import { tutorRoutes } from "./tutor.routes";
import { petRoutes } from "./pet.routes";

const routes = Router();

routes.use("/tutors", tutorRoutes);
routes.use("/pets", petRoutes);

export { routes };
