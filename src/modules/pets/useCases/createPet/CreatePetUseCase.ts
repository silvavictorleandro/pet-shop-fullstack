import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePetDTO } from "../../dtos/CreatePetDTO";

export class CreatePetUseCase {
  async execute({ name, type, breed, dateOfBirth, petTutorDoc }: CreatePetDTO) {
    const petAlreadyExists = await prisma.pet.findFirst({
      where: {
        name,
        type,
        breed,
        dateOfBirth,
        petTutorDoc,
      },
    });

    if (petAlreadyExists) {
      throw new AppError("Pet already exists!");
    }

    const tutorExists = await prisma.tutor.findUnique({
      where: {
        tutorDoc: petTutorDoc,
      },
    });

    if (!tutorExists) {
      throw new AppError("Tutor not found!");
    }

    const pet = await prisma.pet.create({
      data: {
        name,
        type,
        breed,
        dateOfBirth,
        petTutorDoc,
      },
    });

    return pet;
  }
}
