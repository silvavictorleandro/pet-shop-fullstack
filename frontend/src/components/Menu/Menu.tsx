import { FaSearch } from "react-icons/fa";

import * as S from "./styles";

export const Menu: React.FC = () => {
  return (
    <S.Menu>
      <S.ContainerSearch>
        <FaSearch />
        <S.SearchInput type="search"></S.SearchInput>
        <S.SearchButton>Pesquisar</S.SearchButton>
      </S.ContainerSearch>
      <S.ButtonAdd>Cadastrar</S.ButtonAdd>
    </S.Menu>
  );
};
