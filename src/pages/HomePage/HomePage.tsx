import { Entrance } from "../../components/Entrance/Entrance";
import { Exit } from "../../components/Exit/Exit";
import { Header } from "../../components/Header/Header";
import * as Styles from "./styles";

interface homePageProps {
  entrance: boolean;
}

export function HomePage({ entrance }: homePageProps) {
  return (
    <>
      <Header />
      <Styles.ContainerMenu>
        <Styles.StyledChoice>
          <Styles.StyledButton to="/entrance" option={entrance}>
            Entrada
          </Styles.StyledButton>
          <Styles.StyledButton to="/exit" option={!entrance}>
            Saída
          </Styles.StyledButton>
        </Styles.StyledChoice>

        {entrance ? <Entrance /> : <Exit />}
      </Styles.ContainerMenu>
    </>
  );
}
