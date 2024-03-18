import { Router } from "express";
import { CreatePetController } from "../modules/pets/useCases/createPet/CreatePetController";
import { GetPetsController } from "../modules/pets/useCases/getPets/GetPetsController";
import { DeletePetController } from "../modules/pets/useCases/deletePet/DeletePetController";

const createPetController = new CreatePetController();
const getPetController = new GetPetsController();
const deletePetController = new DeletePetController();

const petRoutes = Router();

petRoutes.post("/", createPetController.handle);
petRoutes.get("/", getPetController.handle);
petRoutes.delete("/", deletePetController.handle);

export { petRoutes };
