import * as Styles from "./styles";

import { ReactComponent as Logo } from "../../assets/avatar_white.svg";
import { MenuBurger } from "../MenuBurger/MenuBurger";

export function Header() {
  return (
    <Styles.ContainerHeader>
      <Logo title="Logo" />
      <MenuBurger />
    </Styles.ContainerHeader>
  );
}
