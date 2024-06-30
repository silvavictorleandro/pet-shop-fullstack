import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePetDTO } from "../../dtos/CreatePetDTO";

export class CreatePetUseCase {
  async execute({ name, type, breed, dateOfBirth, tutorName }: CreatePetDTO) {
    const petAlreadyExists = await prisma.pet.findFirst({
      where: {
        name,
        type,
        tutorName,
        breed,
        dateOfBirth,
      },
    });

    if (petAlreadyExists) {
      throw new AppError("Pet already exists!");
    }

    const pet = await prisma.pet.create({
      data: {
        name,
        type,
        tutorName,
        breed,
        dateOfBirth,
      },
    });

    return pet;
  }
}
