import { Tutor } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetTutorUseCase {
  async execute(): Promise<Tutor[]> {
    const tutors = await prisma.tutor.findMany({
      include: {
        pets: {
          select: {
            name: true,
            type: true,
            breed: true,
            dateOfBirth: true,
            petTutorDoc: true,
          },
        },
      },
    });

    return tutors;
  }
}
