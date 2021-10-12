import { useContext } from "react";
import { AppContext } from "../../contexts/routesContext";
import * as Styles from "./styles";

interface detailProps {
  paid?: boolean;
  time?: string;
  left?: boolean;
}

export function RegisterDetail({ paid, time, left }: detailProps) {
  const { plate } = useContext(AppContext);

  return (
    <Styles.ContainerDetail>
      <Styles.LabelTitle>Placa</Styles.LabelTitle>
      <Styles.PlateLabel>{plate}</Styles.PlateLabel>
      <Styles.LabelTitle>Status</Styles.LabelTitle>
      <Styles.NormalLabel>
        {left ? "Liberado" : "Estacionado"}
      </Styles.NormalLabel>
      <Styles.LabelTitle>Tempo Atual</Styles.LabelTitle>
      <Styles.NormalLabel>
        {time === undefined
          ? "—"
          : time
              .replace(" ", "")
              .replace("minutes", "min")
              .replace("hours", "h")
              .replace("days", "dias")
              .replace("years", "anos")
              .replace("seconds", "s")}
      </Styles.NormalLabel>
      <Styles.LabelTitle>Pagamento</Styles.LabelTitle>
      <Styles.NormalLabel>{paid ? "Pago" : "—"}</Styles.NormalLabel>
    </Styles.ContainerDetail>
  );
}
