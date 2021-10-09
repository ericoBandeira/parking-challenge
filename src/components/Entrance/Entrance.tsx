import { useState } from "react";
import { Buttons } from "../Buttons/Buttons";
import { InfoBox } from "../InfoBox/InfoBox";
import { PlateInput } from "../PlateInput/PlateInput";
import * as Styles from "./styles";

export function Entrance() {
  const [entracePlate, setEntrancePlate] = useState("");
  const [exclamation, setExclamation] = useState(false);

  return (
    <Styles.ContainerEntrance>
      <PlateInput
        setEntrancePlate={setEntrancePlate}
        setExclamation={setExclamation}
        entracePlate={entracePlate}
        plateError={!exclamation && entracePlate.length === 8}
      />
      {!exclamation && entracePlate.length === 8 ? (
        <InfoBox information={exclamation}>
          Por favor, insira uma placa válida!
        </InfoBox>
      ) : null}
      <Buttons purple={false} disabled={!exclamation} outline={false}>
        Confirmar Entrada
      </Buttons>
    </Styles.ContainerEntrance>
  );
}
