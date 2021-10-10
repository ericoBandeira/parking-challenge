import { useContext } from "react";
import { Entrance } from "../../components/Entrance/Entrance";
import { Exit } from "../../components/Exit/Exit";
import { Header } from "../../components/Header/Header";
import { AppContext } from "../../contexts/routesContext";
import * as Styles from "./styles";

export function HomePage() {
  const { entrance, exit, changeToEntrance, changeToExit } =
    useContext(AppContext);

  return (
    <>
      <Header />
      <Styles.ContainerMenu>
        <Styles.StyledChoice>
          <Styles.StyledButton option={entrance} onClick={changeToEntrance}>
            Entrada
          </Styles.StyledButton>
          <Styles.StyledButton option={exit} onClick={changeToExit}>
            Saída
          </Styles.StyledButton>
        </Styles.StyledChoice>

        {entrance ? <Entrance /> : <Exit />}
      </Styles.ContainerMenu>
    </>
  );
}
