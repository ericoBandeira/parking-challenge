import React, { useState } from "react";
import { Entrance } from "../Entrance/Entrance";
import { Exit } from "../Exit/Exit";
import * as Styles from "./styles";

export function HomePage() {
  const [entrance, setEntrance] = useState(true);
  const [exit, setExit] = useState(false);

  function changeToEntrance() {
    setEntrance(true);
    setExit(false);
  }
  function changeToExit() {
    setEntrance(false);
    setExit(true);
  }

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
