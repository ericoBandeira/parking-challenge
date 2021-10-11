import { Header } from "../../components/Header/Header";
import * as Styles from "./styles";
import { ReactComponent as BackButton } from "../../assets/arrow_l.svg";
import { useContext, useState } from "react";
import { AppContext } from "../../contexts/routesContext";
import { PaymentHistoryBox } from "../../components/PaymentHistoryBox/PaymentHistoryBox";
import { apiParking } from "../../api/api";

interface PlateHisoryProps {
  left: boolean;
  paid: boolean;
  plate: string;
  reservation: string;
  time: string;
}

export function HistoryPage() {
  const { plate, setChangePage } = useContext(AppContext);
  const [myHistoryArray, setMyHistoryArray] = useState<Array<PlateHisoryProps>>(
    []
  );

  apiParking.get(plate).then(async (res) => {
    setMyHistoryArray(res.data);
  });

  return (
    <>
      <Header />
      <Styles.ContainerHistory>
        <Styles.HistoryHeader>
          <button onClick={() => setChangePage(true)}>
            <BackButton />
          </button>
          <Styles.HistoryTitle>Placa {plate}</Styles.HistoryTitle>
        </Styles.HistoryHeader>

        {myHistoryArray.map((res) => (
          <PaymentHistoryBox
            key={res.reservation}
            time={res.time}
            paid={res.paid}
          />
        ))}
      </Styles.ContainerHistory>
    </>
  );
}
