import { useState } from "react";
import { Buttons } from "../Buttons/Buttons";
import { ExitModal } from "../ExitModal/ExitModal";
import { InfoBox } from "../InfoBox/InfoBox";
import { PaymentModal } from "../PaymentModal/PaymentModal";
import { PlateInput } from "../PlateInput/PlateInput";
import * as Styles from "./styles";

export function Exit() {
  const [entracePlate, setEntrancePlate] = useState("");
  const [exclamation, setExclamation] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenExit, setModalOpenExit] = useState(false);
  const [unfoundPlate, setunfoundPlate] = useState(false);
  const [alreadyPaid, setAlreadyPaid] = useState(false);
  const [unfoundPlateExit, setunfoundPlateExit] = useState(false);

  return (
    <>
      <Styles.ContainerExit>
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
        {unfoundPlate ? (
          <InfoBox information={!unfoundPlate}>
            Placa não cadastrada ou já paga.
          </InfoBox>
        ) : null}
        {unfoundPlateExit ? (
          <InfoBox information={!unfoundPlateExit}>
            Placa não cadastrada.
          </InfoBox>
        ) : null}
        {alreadyPaid ? (
          <InfoBox information={!alreadyPaid}>
            Pagamento ainda não efetuado.
          </InfoBox>
        ) : null}
        <Buttons
          purple={true}
          disabled={!exclamation}
          outline={false}
          onClick={() => setModalOpen(true)}
        >
          Pagamento
        </Buttons>
        <Buttons
          purple={true}
          disabled={!exclamation}
          outline={true}
          onClick={() => setModalOpenExit(true)}
        >
          Saída
        </Buttons>
        <Styles.BackgroundNoneButton
          disabled={!exclamation}
          onClick={() => (window.location.href = "/historico")}
        >
          Ver Histórico
        </Styles.BackgroundNoneButton>
      </Styles.ContainerExit>
      <PaymentModal
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        setunfoundPlate={setunfoundPlate}
      />
      <ExitModal
        isOpen={modalOpenExit}
        setModalOpen={setModalOpenExit}
        setunfoundPlateExit={setunfoundPlateExit}
        setAlreadyPaid={setAlreadyPaid}
      />
    </>
  );
}
