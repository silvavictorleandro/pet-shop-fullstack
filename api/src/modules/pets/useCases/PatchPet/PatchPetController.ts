import { Request, Response } from "express";
import { PatchPetUseCase } from "./PatchPetUseCase";

export class PatchPetController {
  async handle(req: Request, res: Response) {
    const { id, name, type, breed, dateOfBirth, tutorName } = req.body;

    const patchPetUseCase = new PatchPetUseCase();

    await patchPetUseCase.execute({
      id,
      name,
      type,
      tutorName,
      breed,
      dateOfBirth,
    });

    return res.status(201).json({ message: "Pet updated!" });
  }
}
