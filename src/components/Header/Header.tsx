import React from "react";

import { ReactComponent as Logo } from "../../assets/avatar_white.svg";
import * as Styles from "./styles";

export function Header() {
  return (
    <Styles.ContainerHeader>
      <Logo />
      <h1>Menu</h1>
    </Styles.ContainerHeader>
  );
}
