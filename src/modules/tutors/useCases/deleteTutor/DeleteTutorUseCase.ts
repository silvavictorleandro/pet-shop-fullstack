import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateTutorDTO } from "../../dtos/CreateTutorDTO";

export class DeleteTutorUseCase {
  async execute({ tutorDoc }: CreateTutorDTO) {
    const tutor = await prisma.tutor.findUnique({
      where: {
        tutorDoc: tutorDoc,
      },
    });

    if (!tutor) {
      throw new AppError("Tutor not found!");
    }
    const tutorToDelete = await prisma.tutor.update({
      where: {
        id: tutor.id,
      },
      data: {
        deleted_at: new Date(),
      },
    });

    return tutorToDelete;
  }
}
