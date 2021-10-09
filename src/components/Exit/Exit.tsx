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
          plateError={!exclamation && entracePlate.length === 8}
        />
        {!exclamation && entracePlate.length === 8 ? (
          <InfoBox information={exclamation}>
            Por favor, insira uma placa válida!
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
        <Buttons purple={true} disabled={!exclamation} outline={true}>
          Saída
        </Buttons>
        <Styles.BackgroundNoneButton>Ver Histórico</Styles.BackgroundNoneButton>
      </Styles.ContainerExit>

      <Modal isOpen={modalOpen}>
        <Styles.TitleModal>
          Confima o pagamento <br />
          da placa abaixo?
        </Styles.TitleModal>

        <Styles.PlateText>ABC-1234</Styles.PlateText>

        <Buttons
          purple={true}
          disabled={false}
          outline={false}
          onClick={() => {}}
        >
          confirmar
        </Buttons>
        <Styles.BackgroundNoneButton onClick={() => setModalOpen(false)}>
          Voltar
        </Styles.BackgroundNoneButton>
      </Modal>
    </>
  );
}
