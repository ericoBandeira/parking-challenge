import { useState } from "react";
import { RightMenu } from "../RightMenu/RightMenu";
import * as Styles from "./styles";

export function MenuBurger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Styles.StyledBurger
        title={window.innerWidth < 769 ? "Burger" : "Not Burger"}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </Styles.StyledBurger>
      <RightMenu open={open} setOpen={setOpen} />
    </>
  );
}
