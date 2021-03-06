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
  setunfoundPlate: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PaymentModal({
  isOpen,
  setModalOpen,
  setunfoundPlate,
}: PaymentProps) {
  const { plate } = useContext(AppContext);
  const [confirmLoad, setConfirmLoad] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  async function parkingPayment() {
    setConfirmLoad(true);
    try {
      await apiParking.post(plate + "/pay");
      setConfirmation(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setConfirmation(false);
      setConfirmLoad(false);
      setModalOpen(false);
    } catch (err: any) {
      setConfirmLoad(false);
      setModalOpen(false);
      setunfoundPlate(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setunfoundPlate(false);
    }
  }

  return (
    <Modal isOpen={isOpen}>
      {confirmLoad ? (
        confirmation ? (
          <Styles.WaitConfirmation>
            <Confirm />
            <Styles.WaitText>PAGO!</Styles.WaitText>
          </Styles.WaitConfirmation>
        ) : (
          <Styles.WaitConfirmation>
            <Loading /> <Styles.WaitText>Confirmando...</Styles.WaitText>
          </Styles.WaitConfirmation>
        )
      ) : (
        <>
          <Styles.TitleModal>
            Confima o pagamento <br />
            da placa abaixo?
          </Styles.TitleModal>
          <Styles.PlateText>{plate}</Styles.PlateText>
          <Buttons
            purple={true}
            disabled={false}
            outline={false}
            onClick={parkingPayment}
          >
            confirmar
          </Buttons>
          <Styles.BackgroundNoneButton onClick={() => setModalOpen(false)}>
            voltar
          </Styles.BackgroundNoneButton>
        </>
      )}
    </Modal>
  );
}
