import { Header } from "../../components/Header/Header";
import * as Styles from "./styles";
import { ReactComponent as BackButton } from "../../assets/arrow_l.svg";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/routesContext";
import { PaymentHistoryBox } from "../../components/PaymentHistoryBox/PaymentHistoryBox";
import { apiParking } from "../../api/api";
import { RegisterDetail } from "../../components/RegisterDetail/RegisterDetail";
import { Link } from "react-router-dom";

interface PlateHisoryProps {
  left: boolean;
  paid: boolean;
  plate: string;
  reservation: string;
  time: string;
}

export function HistoryPage() {
  const [Load, setLoad] = useState(true);
  const [historyData, setHistoryData] = useState(true);
  const [currentTime, setCurrentTime] = useState<string>();
  const [carLeft, setCarLeft] = useState<boolean>();
  const [payment, setPayment] = useState<boolean>();
  const [myHistoryArray, setMyHistoryArray] = useState<Array<PlateHisoryProps>>(
    []
  );
  const { plate } = useContext(AppContext);

  useEffect(() => {
    apiParking.get(plate).then(async (res) => {
      setMyHistoryArray(res.data);
      setLoad(false);
    });
  }, [plate]);

  return (
    <>
      <Header />
      <Styles.ContainerHistory>
        <Styles.HistoryHeader>
          {historyData ? (
            <Link to="/exit">
              <BackButton />
            </Link>
          ) : (
            <button onClick={() => setHistoryData(true)}>
              <BackButton />
            </button>
          )}
          {historyData ? (
            <Styles.HistoryTitle>Placa {plate}</Styles.HistoryTitle>
          ) : null}
        </Styles.HistoryHeader>

        {Load ? (
          <Styles.LoadContainer>
            <Loading />
            <Styles.LoadHistoryText>
              Carregando Histórico
            </Styles.LoadHistoryText>
          </Styles.LoadContainer>
        ) : historyData ? (
          myHistoryArray.reverse().map((res, indice) => (
            <PaymentHistoryBox
              key={indice}
              time={res.time}
              paid={res.paid}
              onClick={() => {
                setCurrentTime(res.time);
                setPayment(res.paid);
                setCarLeft(res.left);
                setHistoryData(false);
              }}
            />
          ))
        ) : (
          <RegisterDetail paid={payment} time={currentTime} left={carLeft} />
        )}
      </Styles.ContainerHistory>
    </>
  );
}
