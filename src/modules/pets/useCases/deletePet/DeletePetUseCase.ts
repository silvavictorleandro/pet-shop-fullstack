import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePetDTO } from "../../dtos/CreatePetDTO";

export class DeletePetUseCase {
  async execute({ petTutorDoc }: CreatePetDTO) {
    const pet = await prisma.pet.findUnique({
      where: {
        petTutorDoc: petTutorDoc,
      },
    });

    if (!pet) {
      throw new AppError("Pet not found!");
    }
    const petToDelete = await prisma.pet.update({
      where: {
        id: pet.id,
      },
      data: {
        deleted_at: new Date(),
      },
    });

    return petToDelete;
  }
}
