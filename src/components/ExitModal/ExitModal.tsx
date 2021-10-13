import { useContext, useState } from "react";
import { AppContext } from "../../contexts/routesContext";
import { Buttons } from "../Buttons/Buttons";
import { Modal } from "../Modal/Modal";
import * as Styles from "./styles";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import { ReactComponent as Confirm } from "../../assets/round-done-button.svg";
import { apiParking } from "../../api/api";

interface PaymentProps {
  isOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAlreadyPaid: React.Dispatch<React.SetStateAction<boolean>>;
  setunfoundPlateExit: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ExitModal({
  isOpen,
  setModalOpen,
  setAlreadyPaid,
  setunfoundPlateExit,
}: PaymentProps) {
  const { plate } = useContext(AppContext);
  const [confirmLoad, setConfirmLoad] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  async function exitPayment() {
    setConfirmLoad(true);
    try {
      await apiParking.post(plate + "/out");
      setConfirmation(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setConfirmation(false);
      setConfirmLoad(false);
      setModalOpen(false);
    } catch (err: any) {
      if (err.response.statusText === "Not Found") {
        setConfirmLoad(false);
        setModalOpen(false);
        setunfoundPlateExit(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setunfoundPlateExit(false);
      } else {
        setConfirmLoad(false);
        setModalOpen(false);
        setAlreadyPaid(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setAlreadyPaid(false);
      }
    }
  }

  return (
    <Modal isOpen={isOpen}>
      {confirmLoad ? (
        confirmation ? (
          <Styles.WaitConfirmation>
            <Confirm />
            <Styles.WaitText>SAÍDA LIBERADA</Styles.WaitText>
          </Styles.WaitConfirmation>
        ) : (
          <Styles.WaitConfirmation>
            <Loading /> <Styles.WaitText>Confirmando...</Styles.WaitText>
          </Styles.WaitConfirmation>
        )
      ) : (
        <>
          <Styles.TitleModal>
            Confirma a saída do <br />
            veiculo da placa abaixo?
          </Styles.TitleModal>
          <Styles.PlateText>{plate}</Styles.PlateText>
          <Buttons
            purple={true}
            disabled={false}
            outline={false}
            onClick={exitPayment}
          >
            Liberar Saída
          </Buttons>
          <Styles.BackgroundNoneButton onClick={() => setModalOpen(false)}>
            voltar
          </Styles.BackgroundNoneButton>
        </>
      )}
    </Modal>
  );
}
