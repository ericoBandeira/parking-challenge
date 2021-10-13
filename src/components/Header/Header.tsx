import * as Styles from "./styles";

import { ReactComponent as Logo } from "../../assets/avatar_white.svg";
import { ReactComponent as LongLogo } from "../../assets/logo_parking.svg";
import { MenuBurger } from "../MenuBurger/MenuBurger";

export function Header() {
  return (
    <Styles.ContainerHeader>
      {window.innerWidth < 769 ? (
        <Logo title="Mobile Logo" />
      ) : (
        <LongLogo title="Logo" />
      )}
      <MenuBurger />
    </Styles.ContainerHeader>
  );
}
