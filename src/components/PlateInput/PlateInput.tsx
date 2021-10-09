import React from "react";
import * as Styles from "./styles";

interface inputProps {
  setEntrancePlate: React.Dispatch<React.SetStateAction<string>>;
  setExclamation: React.Dispatch<React.SetStateAction<boolean>>;
  entracePlate: string;
  plateError: boolean;
}

export function PlateInput({
  entracePlate,
  setEntrancePlate,
  setExclamation,
  plateError,
}: inputProps) {
  const maskCEP = (value: string) => {
    var regexPlate = "[A-Z]{3}[0-9][0-9A-Z][0-9]{2}";
    setEntrancePlate(
      value
        .replace(/[^\w]*/g, "")
        .replace(/(\w{3})(\w)/g, "$1-$2")
        .replace(/(-\w{4})(\w)/g, "$1")
    );
    if (value.replace("-", "").match(regexPlate)?.length === 1) {
      setExclamation(true);
    } else {
      setExclamation(false);
    }
  };

  return (
    <>
      <Styles.EntranceInputText>Número da placa:</Styles.EntranceInputText>
      <Styles.EntranceInput
        value={entracePlate}
        placeholder="AAA-0000"
        maxLength={8}
        onChange={(e) => {
          maskCEP(e.target.value.toUpperCase());
        }}
        plateError={plateError}
      />
    </>
  );
}
