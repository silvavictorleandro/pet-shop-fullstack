import { prisma } from "../../../../prisma/client";
import { UpdatePetDTO } from "../../dtos/UpdatePetDTO";

export class PatchPetUseCase {
  async execute({
    id,
    name,
    type,
    breed,
    dateOfBirth,
    tutorName,
  }: UpdatePetDTO) {
    const pet = await prisma.pet.update({
      where: {
        id,
      },
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
