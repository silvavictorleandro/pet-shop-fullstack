import { IoIosArrowDown } from "react-icons/io";
import { FaUser, FaCat, FaDog, FaRegCalendarAlt, FaDna } from "react-icons/fa";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import { MdPets } from "react-icons/md";

import * as S from "./styles";
import { useState } from "react";
import { api } from "../../service/api";

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

  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365;
  const convertDate = Number(pet.dateOfBirth);
  const date = new Date(convertDate, 0, 1);
  const ageInMilliseconds = Date.now() - date.getTime();
  const agePetNumber = Math.floor(ageInMilliseconds / millisecondsInYear);
  const agePet = agePetNumber.toString();

  async function handleDelete(id: string) {
    try {
      await api.delete("/delete", {
        params: {
          id: id,
        },
      });

      const allPets = pets.filter((pet) => pet.id !== id);
      setPets(allPets);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <S.Card>
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
            <FaRegCalendarAlt style={{ fontSize: "13px" }} /> Idade: {agePet}
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
