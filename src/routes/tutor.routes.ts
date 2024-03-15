import { Router } from "express";
import { CreateTutorController } from "../modules/tutors/useCases/createTutor/CreateTutorController";
import { GetTutorsController } from "../modules/tutors/useCases/getTutors/GetTutorsController";

const createTutorController = new CreateTutorController();
const getTutorsController = new GetTutorsController();

const tutorRoutes = Router();

tutorRoutes.post("/", createTutorController.handle);
tutorRoutes.get("/", getTutorsController.handle);

export { tutorRoutes };
