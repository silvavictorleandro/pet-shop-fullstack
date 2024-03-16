import { Request, Response } from "express";
import { GetPetsUseCase } from "./GetPetsUseCase";

export class GetPetsController {
  async handle(req: Request, res: Response) {
    const getPetsUseCase = new GetPetsUseCase();

    const result = await getPetsUseCase.execute();

    return res.status(201).json(result);
  }
}
