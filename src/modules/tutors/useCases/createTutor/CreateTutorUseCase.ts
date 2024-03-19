import { Tutor } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateTutorDTO } from "../../dtos/CreateTutorDTO";

export class CreateTutorUseCase {
  async execute({
    name,
    email,
    address,
    tutorDoc,
  }: CreateTutorDTO): Promise<Tutor> {
    const tutorAlreadyExists = await prisma.tutor.findUnique({
      where: {
        tutorDoc,
      },
    });

    if (tutorAlreadyExists) {
      throw new AppError("Tutor already exists!");
    }

    const tutor = await prisma.tutor.create({
      data: {
        name,
        email,
        address,
        tutorDoc,
      },
    });

    return tutor;
  }
}
