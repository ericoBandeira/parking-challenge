import { useState } from "react";
import * as Styles from "./styles";
import { ReactComponent as RedInformation } from "../../assets/ic_exclamation-mark.svg";

interface informationProps {
  information: boolean;
  children?: string;
}

export function InfoBox({ information, children }: informationProps) {
  return (
    <Styles.informationContainer info={information}>
      {information ? null : <RedInformation />}
      {children}
    </Styles.informationContainer>
  );
}
