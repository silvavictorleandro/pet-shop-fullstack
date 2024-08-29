import { Request, Response } from "express";
import { DeletePetUseCase } from "./DeletePetUseCase";

export class DeletePetController {
  async handle(req: Request, res: Response) {
    const { id } = req.query;

    if (typeof id !== "string") {
      return res.status(400).json({ message: "Invalid id" });
    }

    const deletePetUseCase = new DeletePetUseCase();

    await deletePetUseCase.execute({
      id,
    });

    return res.status(200).json({ message: "Pet deleted" });
  }
}
