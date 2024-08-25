import { MdClose } from "react-icons/md";
import * as S from "./styles";
import { FormEvent, useRef } from "react";
import { api } from "../../service/api";
import { Pet } from "../../App";
import { toast } from "react-toastify";

interface AddPetProps {
  modalPet: boolean;
  toggleModalPet: Function;
  pets: Pet[];
  setPets: any;
  getPets: any;
}

export const AddPet: React.FC<AddPetProps> = ({
  modalPet,
  toggleModalPet,
  setPets,
  getPets,
}) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const typeRef = useRef<HTMLInputElement | null>(null);
  const breedRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const tutorNameRef = useRef<HTMLInputElement | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (
      !nameRef.current?.value ||
      !typeRef.current?.value ||
      !breedRef.current?.value ||
      !ageRef.current?.value ||
      !tutorNameRef.current?.value
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    const response = await api.post("/post", {
      name: nameRef.current?.value,
      type: typeRef.current?.value.toLowerCase(),
      breed: breedRef.current?.value,
      dateOfBirth: ageRef.current?.value,
      tutorName: tutorNameRef.current?.value,
    });

    setPets((allPets: any) => [...allPets, response.data]);

    toast.success("Pet cadastrado com sucesso!");

    nameRef.current.value = "";
    typeRef.current.value = "";
    breedRef.current.value = "";
    ageRef.current.value = "";
    tutorNameRef.current.value = "";

    toggleModalPet();
    getPets();
  }

  return (
    <S.Fade modal={modalPet}>
      <S.Modal modal={modalPet}>
        <S.ContainerHeader>
          <S.Title>Adicionar Pet</S.Title>
          <S.ButtonClose onClick={() => toggleModalPet()}>
            <MdClose />
          </S.ButtonClose>
        </S.ContainerHeader>

        <S.Form onSubmit={handleSubmit}>
          <S.Label>Nome Pet</S.Label>
          <S.Input ref={nameRef}></S.Input>
          <S.Label>Espécie do Pet</S.Label>
          <S.Input ref={typeRef} placeholder="Gato ou Cachorro"></S.Input>
          <S.Label>Raça</S.Label>
          <S.Input ref={breedRef}></S.Input>
          <S.Label>Data de Nascimento do Pet</S.Label>
          <S.Input type="date" ref={ageRef}></S.Input>
          <S.Label>Nome Tutor</S.Label>
          <S.Input ref={tutorNameRef}></S.Input>
          <S.ButtonAddPet>Adicionar Pet</S.ButtonAddPet>
        </S.Form>
      </S.Modal>
    </S.Fade>
  );
};
