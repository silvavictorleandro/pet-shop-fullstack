import { Pet } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetPetsUseCase {
  async execute(): Promise<Pet[]> {
    const pets = await prisma.pet.findMany({});

    return pets;
  }
}
