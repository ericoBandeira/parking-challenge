import { useContext } from "react";
import { Entrance } from "../../components/Entrance/Entrance";
import { Exit } from "../../components/Exit/Exit";
import { Header } from "../../components/Header/Header";
import { AppContext } from "../../contexts/routesContext";
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
          <Styles.StyledButton
            option={entrance}
            onClick={() => {
              window.location.href = "/entrance";
            }}
          >
            Entrada
          </Styles.StyledButton>
          <Styles.StyledButton
            option={!entrance}
            onClick={() => {
              window.location.href = "/exit";
            }}
          >
            Saída
          </Styles.StyledButton>
        </Styles.StyledChoice>

        {entrance ? <Entrance /> : <Exit />}
      </Styles.ContainerMenu>
    </>
  );
}
