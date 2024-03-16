import { Router } from "express";
import { CreatePetController } from "../modules/pets/useCases/createPet/CreatePetController";

const createPetController = new CreatePetController();

const petRoutes = Router();

petRoutes.post("/", createPetController.handle);

export { petRoutes };
