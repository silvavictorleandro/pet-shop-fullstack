import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePetDTO } from "../../dtos/CreatePetDTO";

export class DeletePetUseCase {
  async execute({ id }: CreatePetDTO) {
    const pet = await prisma.pet.findUnique({
      where: {
        id,
      },
    });

    if (!pet) {
      throw new AppError("Pet not found!");
    }
    const petToDelete = await prisma.pet.delete({
      where: {
        id: pet.id,
      },
    });

    return petToDelete;
  }
}
