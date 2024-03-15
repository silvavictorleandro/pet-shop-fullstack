import { Request, Response } from "express";
import { GetTutorUseCase } from "./GetTutorsUseCase";

export class GetTutorsController {
  async handle(req: Request, res: Response) {
    const getTutorsUseCase = new GetTutorUseCase();

    const result = await getTutorsUseCase.execute();

    return res.status(201).json(result);
  }
}
