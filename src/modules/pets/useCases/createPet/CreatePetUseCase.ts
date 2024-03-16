import { prisma } from "../../../../prisma/client";
import { CreatePetDTO } from "../../dtos/CreatePetDTO";

export class CreatePetUseCase {
  async execute({ name, type, breed, dateOfBirth, petTutorDoc }: CreatePetDTO) {
    // Validar se tutor já existe

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
