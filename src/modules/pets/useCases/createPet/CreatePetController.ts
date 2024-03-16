import { Request, Response } from "express";
import { CreatePetUseCase } from "./CreatePetUseCase";

export class CreatePetController {
  async handle(req: Request, res: Response) {
    const { name, type, breed, dateOfBirth, petTutorDoc } = req.body;

    const createPetUseCase = new CreatePetUseCase();

    const result = await createPetUseCase.execute({
      name,
      type,
      breed,
      dateOfBirth,
      petTutorDoc,
    });

    return res.status(201).json(result);
  }
}
