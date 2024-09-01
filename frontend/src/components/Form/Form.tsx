import { MdClose } from "react-icons/md";
import * as S from "./styles";
import { FormEvent, useEffect, useRef } from "react";
import { api } from "../../service/api";
import { Pet } from "../../interfaces/interfaces";
import { toast } from "react-toastify";

interface FormProps {
  modalPet: boolean;
  modalEditPet?: boolean;
  toggleModalPet: Function;
  toggleModalEditPet: Function;
  pets: Pet[];
  setPets: any;
  getPets: any;
  currentPet?: Pet | null;
}

export const Form: React.FC<FormProps> = ({
  modalPet,
  modalEditPet,
  toggleModalPet,
  toggleModalEditPet,
  pets,
  setPets,
  getPets,
  currentPet,
}) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const typeRef = useRef<HTMLInputElement | null>(null);
  const breedRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const tutorNameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (modalEditPet && currentPet) {
      if (nameRef.current) nameRef.current.value = currentPet.name;
      if (typeRef.current) typeRef.current.value = currentPet.type;
      if (breedRef.current) breedRef.current.value = currentPet.breed;
      if (ageRef.current) ageRef.current.value = currentPet.dateOfBirth;
      if (tutorNameRef.current)
        tutorNameRef.current.value = currentPet.tutorName;
    }
  }, [modalEditPet, currentPet]);

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

    if (modalEditPet && currentPet) {
      try {
        const response = await api.patch(`/patch?id=${currentPet.id}`, {
          id: currentPet.id,
          name: nameRef.current?.value,
          type: typeRef.current?.value.toLowerCase(),
          breed: breedRef.current?.value,
          dateOfBirth: ageRef.current?.value,
          tutorName: tutorNameRef.current?.value,
        });

        const allPets = pets.map((pet: Pet) => {
          if (pet.id === currentPet.id) {
            return response.data;
          }
          return pet;
        });

        setPets(allPets);

        toast.success("Pet atualizado com sucesso!");

        nameRef.current.value = "";
        typeRef.current.value = "";
        breedRef.current.value = "";
        ageRef.current.value = "";
        tutorNameRef.current.value = "";

        modalEditPet && toggleModalEditPet();
      } catch (err) {
        console.log(err);
        toast.error("Erro ao atualizar pet!");
      }
    } else {
      try {
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
      } catch (err) {
        console.log(err);
        toast.error("Erro ao cadastrar pet!");
      }
    }
    modalPet && toggleModalPet();
    modalEditPet && toggleModalEditPet();

    getPets();
  }

  return (
    <S.Fade modal={modalPet} modalEditPet={modalEditPet}>
      <S.Modal modal={modalPet} modalEditPet={modalEditPet}>
        <S.ContainerHeader>
          {modalEditPet ? (
            <S.Title>Atualizar Pet</S.Title>
          ) : (
            <S.Title>Adicionar Pet</S.Title>
          )}
          {modalEditPet ? (
            <S.ButtonClose onClick={() => toggleModalEditPet()}>
              <MdClose />
            </S.ButtonClose>
          ) : (
            <S.ButtonClose onClick={() => toggleModalPet()}>
              <MdClose />
            </S.ButtonClose>
          )}
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
          {modalEditPet ? (
            <S.ButtonAddPet>Atualizar Pet</S.ButtonAddPet>
          ) : (
            <S.ButtonAddPet>Adicionar Pet</S.ButtonAddPet>
          )}
        </S.Form>
      </S.Modal>
    </S.Fade>
  );
};
