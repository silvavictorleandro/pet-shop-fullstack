import { Router } from "express";
import { CreateTutorController } from "../modules/tutors/useCases/createTutor/CreateTutorController";

const createTutorController = new CreateTutorController();

const tutorRoutes = Router();

tutorRoutes.post("/", createTutorController.handle);

export { tutorRoutes };
