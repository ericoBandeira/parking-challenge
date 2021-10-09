import React, { useContext, useState } from "react";
import { AppContext } from "../../contexts/routesContext";
import { Entrance } from "../Entrance/Entrance";
import { Exit } from "../Exit/Exit";
import * as Styles from "./styles";

export function HomePage() {
  const {
    entrance,
    exit,
    changeToEntrance,
    changeToExit} = useContext(AppContext);

  return (
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
  );
}
