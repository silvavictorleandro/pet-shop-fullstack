import { Request, Response } from "express";
import { CreatePetUseCase } from "./CreatePetUseCase";

export class CreatePetController {
  async handle(req: Request, res: Response) {
    const { id, name, type, breed, dateOfBirth, tutorName } = req.body;

    const createPetUseCase = new CreatePetUseCase();

    await createPetUseCase.execute({
      id,
      name,
      type,
      tutorName,
      breed,
      dateOfBirth,
    });

    return res.status(201).json({ message: "Pet created!" });
  }
}
