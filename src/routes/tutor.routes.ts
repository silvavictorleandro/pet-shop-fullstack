import { Router } from "express";
import { CreateTutorController } from "../modules/tutors/useCases/createTutor/CreateTutorController";
import { GetTutorsController } from "../modules/tutors/useCases/getTutors/GetTutorsController";
import { DeleteTutorController } from "../modules/tutors/useCases/deleteTutor/DeleteTutorController";

const createTutorController = new CreateTutorController();
const getTutorsController = new GetTutorsController();
const deleteTutorController = new DeleteTutorController();

const tutorRoutes = Router();

tutorRoutes.post("/", createTutorController.handle);
tutorRoutes.get("/", getTutorsController.handle);
tutorRoutes.delete("/", deleteTutorController.handle);

export { tutorRoutes };
