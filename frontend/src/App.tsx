import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { PetList } from "./components/PetList/PetList";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <main>
      <Header />
      <Menu />
      <PetList />
      <GlobalStyles />
    </main>
  );
}

export default App;
