import { Pet } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetPetsUseCase {
  async execute(): Promise<Pet[]> {
    const pets = await prisma.pet.findMany({
      where: {
        deleted_at: null,
      },
      include: {
        petTutorDocRelation: {
          select: {
            name: true,
            email: true,
            address: true,
            tutorDoc: true,
          },
        },
      },
    });

    return pets;
  }
}
