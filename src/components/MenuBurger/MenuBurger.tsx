import React, { useState } from "react";
import { RightMenu } from "../RightMenu/RightMenu";
import * as Styles from "./styles";

export function MenuBurger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Styles.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Styles.StyledBurger>
      <RightMenu open={open} />
    </>
  );
}
