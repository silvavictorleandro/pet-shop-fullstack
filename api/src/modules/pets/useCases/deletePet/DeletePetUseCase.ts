import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { DeletePetDTO } from "../../dtos/DeletePetDTO";

export class DeletePetUseCase {
  async execute({ id }: DeletePetDTO) {
    const pet = await prisma.pet.findFirst({
      where: { id: id },
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
