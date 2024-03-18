import { Request, Response } from "express";
import { CreateTutorUseCase } from "./CreateTutorUseCase";

export class CreateTutorController {
  async handle(req: Request, res: Response) {
    const { id, name, email, address, tutorDoc } = req.body;

    const createTutorUseCase = new CreateTutorUseCase();

    const result = await createTutorUseCase.execute({
      name,
      email,
      address,
      tutorDoc,
    });

    return res.status(201).json(result);
  }
}
