import { useState } from "react";
import { Buttons } from "../Buttons/Buttons";
import { InfoBox } from "../InfoBox/InfoBox";
import { PlateInput } from "../PlateInput/PlateInput";
import * as Styles from "./styles";

export function Exit() {
  const [entracePlate, setEntrancePlate] = useState("");
  const [exclamation, setExclamation] = useState(false);

  return (
    <Styles.ContainerExit>
      <PlateInput
        setEntrancePlate={setEntrancePlate}
        setExclamation={setExclamation}
        entracePlate={entracePlate}
      />
      {!exclamation && entracePlate.length === 8 ? (
        <InfoBox information={exclamation}>
          Por favor, insira uma placa válida!
        </InfoBox>
      ) : null}
      <Buttons purple={true} disabled={!exclamation} outline={false}>
        Pagamento
      </Buttons>
      <Buttons purple={true} disabled={!exclamation} outline={true}>
        Saída
      </Buttons>
      <Styles.BackgroundNoneButton>Ver Histórico</Styles.BackgroundNoneButton>
    </Styles.ContainerExit>
  );
}
