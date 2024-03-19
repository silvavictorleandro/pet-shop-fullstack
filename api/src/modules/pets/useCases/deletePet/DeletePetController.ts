import { Request, Response } from "express";
import { DeletePetUseCase } from "./DeletePetUseCase";

export class DeletePetController {
  async handle(req: Request, res: Response) {
    const { id, name, type, breed, dateOfBirth, petTutorDoc } = req.body;

    const deletePetUseCase = new DeletePetUseCase();

    await deletePetUseCase.execute({
      id,
      name,
      type,
      breed,
      dateOfBirth,
      petTutorDoc,
    });

    return res.status(200).json({ message: "Pet deleted" });
  }
}
