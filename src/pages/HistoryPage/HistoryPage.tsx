import { Header } from "../../components/Header/Header";
import * as Styles from "./styles";
import { ReactComponent as BackButton } from "../../assets/arrow_l.svg";
import { useContext } from "react";
import { AppContext } from "../../contexts/routesContext";

export function HistoryPage() {
  const { plate, setChangePage } = useContext(AppContext);

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
      </Styles.ContainerHistory>
    </>
  );
}
