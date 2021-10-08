import * as Styles from "./styles";

import { ReactComponent as Logo } from "../../assets/avatar_white.svg";
import { MenuBurger } from "../MenuBurger/MenuBurger";

export function Header() {
  return (
    <Styles.ContainerHeader>
      <Logo />
      <MenuBurger />
    </Styles.ContainerHeader>
  );
}
