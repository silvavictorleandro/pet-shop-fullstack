import { IoIosArrowDown } from "react-icons/io";
import { FaUser, FaCat, FaDog, FaRegCalendarAlt, FaDna } from "react-icons/fa";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import { MdPets } from "react-icons/md";
import { toast } from "react-toastify";

import * as S from "./styles";
import { useState } from "react";
import { api } from "../../service/api";
import { parseISO, differenceInYears } from "date-fns";

interface Pet {
  id: string;
  name: string;
  type: string;
  tutorName: string;
  breed: string;
  dateOfBirth: string;
}

interface TypePetProps {
  pets: Pet[];
  pet: Pet;
  setPets: any;
}

export const PetCard: React.FC<TypePetProps> = ({ pets, pet, setPets }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  let birthDate;
  if (pet.dateOfBirth) {
    birthDate = parseISO(pet.dateOfBirth);
  } else {
    birthDate = new Date();
  }
  const today = new Date();
  const ageInYears = differenceInYears(today, birthDate);

  async function handleDelete(id: string) {
    try {
      await api.delete("/delete", {
        params: {
          id: id,
        },
      });

      const allPets = pets.filter((pet) => pet.id !== id);
      setPets(allPets);
      toast.error("Pet deletado com sucesso!");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <S.Card key={pet.id}>
        <S.FirstCard>
          <S.ContainerEspecificInfos>
            <S.PetType>{pet.type === "gato" ? <FaCat /> : <FaDog />}</S.PetType>

            <S.ContainerInfos>
              <S.PetName>
                <MdPets /> {pet.name}
              </S.PetName>

              <S.TutorName>
                <FaUser /> {pet.tutorName}
              </S.TutorName>
            </S.ContainerInfos>

            <S.ContainerButton>
              <S.Button onClick={handleButtonClick}>
                <IoIosArrowDown />
              </S.Button>
            </S.ContainerButton>
          </S.ContainerEspecificInfos>
        </S.FirstCard>
        <S.SecondCard isExpanded={isExpanded}>
          <S.Breed>
            <FaDna style={{ fontSize: "13px" }} /> Raça: {pet.breed}
          </S.Breed>
          <S.BirthDay>
            <FaRegCalendarAlt style={{ fontSize: "13px" }} /> Idade:{" "}
            {ageInYears}
          </S.BirthDay>
          <S.EditButton>
            <RiEditBoxLine style={{ fontSize: "18px" }} />
            Editar
          </S.EditButton>
          <S.RemoveButton onClick={() => handleDelete(pet.id)}>
            <RiDeleteBin6Line style={{ fontSize: "18px" }} />
            Remover
          </S.RemoveButton>
        </S.SecondCard>
      </S.Card>
    </>
  );
};
