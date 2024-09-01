import { CreatePetDTO } from "./CreatePetDTO";

export interface UpdatePetDTO extends Partial<CreatePetDTO> {
  id: string;
}
