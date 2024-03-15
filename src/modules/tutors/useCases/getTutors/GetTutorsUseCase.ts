import { Tutor } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetTutorUseCase {
  async execute(): Promise<Tutor[]> {
    const tutors = await prisma.tutor.findMany({});

    return tutors;
  }
}
