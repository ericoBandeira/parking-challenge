import { useContext } from "react";
import { AppContext } from "../../contexts/routesContext";
import { Buttons } from "../Buttons/Buttons";
import { Modal } from "../Modal/Modal";
import * as Styles from "./styles";

interface PaymentProps {
  isOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PaymentModal({ isOpen, setModalOpen }: PaymentProps) {
  const { plate } = useContext(AppContext);

  return (
    <Modal isOpen={isOpen}>
      <Styles.TitleModal>
        Confima o pagamento <br />
        da placa abaixo?
      </Styles.TitleModal>

      <Styles.PlateText>{plate}</Styles.PlateText>

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
  );
}
