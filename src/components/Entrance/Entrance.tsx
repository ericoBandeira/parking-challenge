import { useContext, useState } from "react";
import { apiParking } from "../../api/api";
import { AppContext } from "../../contexts/routesContext";
import { Buttons } from "../Buttons/Buttons";
import { InfoBox } from "../InfoBox/InfoBox";
import { PlateInput } from "../PlateInput/PlateInput";
import * as Styles from "./styles";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import { ReactComponent as Confirm } from "../../assets/round-done-button.svg";

export function Entrance() {
  const [entracePlate, setEntrancePlate] = useState("");
  const [exclamation, setExclamation] = useState(false);
  const [confirmLoad, setConfirmLoad] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [alreadyEntrance, setalreadyEntrance] = useState(false);

  const { plate } = useContext(AppContext);

  async function parkingEntrance() {
    setConfirmLoad(true);
    try {
      await apiParking.post("", {
        plate: plate,
      });
      setConfirmation(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setConfirmation(false);
      setConfirmLoad(false);
    } catch (err) {
      setConfirmLoad(false);
      setalreadyEntrance(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setalreadyEntrance(false);
    }
  }

  return confirmLoad ? (
    confirmation ? (
      <Styles.WaitConfirmation>
        <Confirm />
        <Styles.WaitText>REGISTRADO!</Styles.WaitText>
      </Styles.WaitConfirmation>
    ) : (
      <Styles.WaitConfirmation>
        <Loading /> <Styles.WaitText>Confirmando...</Styles.WaitText>
      </Styles.WaitConfirmation>
    )
  ) : (
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
      {alreadyEntrance ? (
        <InfoBox information={!alreadyEntrance}>
          Essa placa já foi cadastrada.
        </InfoBox>
      ) : null}
      <Buttons
        purple={false}
        disabled={!exclamation}
        outline={false}
        onClick={parkingEntrance}
      >
        Confirmar Entrada
      </Buttons>
    </Styles.ContainerEntrance>
  );
}
