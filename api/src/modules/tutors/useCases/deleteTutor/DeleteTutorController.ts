import { Request, Response } from "express";
import { DeleteTutorUseCase } from "./DeleteTutorUseCase";

export class DeleteTutorController {
  async handle(req: Request, res: Response) {
    const { name, email, address, tutorDoc } = req.body;

    const deleteTutorUseCase = new DeleteTutorUseCase();

    await deleteTutorUseCase.execute({ name, email, address, tutorDoc });

    return res.status(200).json({ message: "Tutor deleted" });
  }
}
