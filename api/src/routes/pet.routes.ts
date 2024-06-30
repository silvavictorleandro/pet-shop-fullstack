import { Router } from "express";
import { CreatePetController } from "../modules/pets/useCases/createPet/CreatePetController";
import { GetPetsController } from "../modules/pets/useCases/getPets/GetPetsController";
import { DeletePetController } from "../modules/pets/useCases/deletePet/DeletePetController";

const getPetController = new GetPetsController();
const createPetController = new CreatePetController();
const deletePetController = new DeletePetController();

const petRoutes = Router();

petRoutes.get("/", getPetController.handle);
petRoutes.post("/post", createPetController.handle);
petRoutes.delete("/delete", deletePetController.handle);

export { petRoutes };
