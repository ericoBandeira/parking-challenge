import { useState } from "react";
import { Buttons } from "../Buttons/Buttons";
import { InfoBox } from "../InfoBox/InfoBox";
import { Modal } from "../Modal/Modal";
import { PlateInput } from "../PlateInput/PlateInput";
import * as Styles from "./styles";

export function Exit() {
  const [entracePlate, setEntrancePlate] = useState("");
  const [exclamation, setExclamation] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
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
      <Styles.BackgroundNoneButton onClick={()=>setModalOpen(true)}>Ver Histórico</Styles.BackgroundNoneButton>
    </Styles.ContainerExit>
    <Modal isOpen={modalOpen}>
        <Styles.BackgroundNoneButton onClick={()=>setModalOpen(false)}>Sair</Styles.BackgroundNoneButton>
    </Modal>
    </>
  );
}
