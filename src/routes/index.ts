import { Router } from "express";
import { tutorRoutes } from "./tutor.routes";

const routes = Router();

routes.use("/tutors", tutorRoutes);

export { routes };
