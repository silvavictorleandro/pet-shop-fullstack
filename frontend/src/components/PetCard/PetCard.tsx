import { IoIosArrowDown } from "react-icons/io";
import { FaUser, FaCat, FaDog, FaRegCalendarAlt, FaDna } from "react-icons/fa";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import { MdPets } from "react-icons/md";

import * as S from "./styles";
import { useState } from "react";

interface TypePetProps {
  typePet: "FaCat" | "FaDog";
}

export const PetCard: React.FC<TypePetProps> = ({ typePet }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <S.Card>
        <S.FirstCard>
          <S.ContainerEspecificInfos>
            <S.PetType>{typePet === "FaCat" ? <FaCat /> : <FaDog />}</S.PetType>

            <S.ContainerInfos>
              <S.PetName>
                <MdPets /> Jimmy
              </S.PetName>

              <S.TutorName>
                <FaUser /> Silva
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
            <FaDna style={{ fontSize: "13px" }} /> Raça: Siamês
          </S.Breed>
          <S.BirthDay>
            <FaRegCalendarAlt style={{ fontSize: "13px" }} /> Idade: 3 anos
          </S.BirthDay>
          <S.EditButton>
            <RiEditBoxLine style={{ fontSize: "18px" }} />
            Editar
          </S.EditButton>
          <S.RemoveButton>
            <RiDeleteBin6Line style={{ fontSize: "18px" }} />
            Remover
          </S.RemoveButton>
        </S.SecondCard>
      </S.Card>
    </>
  );
};
