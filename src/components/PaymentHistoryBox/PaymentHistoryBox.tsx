import React from "react";
import * as Styles from "./styles";

interface PlateHisoryProps {
  key: string;
  paid: boolean;
  time: string;
}

export function PaymentHistoryBox({ paid, time }: PlateHisoryProps) {
  return (
    <Styles.HistoryBox>
      <div>
        <Styles.StyledTitle>Tempo Atual</Styles.StyledTitle>
        <Styles.StyledBody>
          {time
            .replace(" ", "")
            .replace("minutes", "min")
            .replace("hours", "h")
            .replace("days", "dias")
            .replace("years", "anos")
            .replace("seconds", "s")}
        </Styles.StyledBody>
      </div>
      <div>
        <Styles.StyledTitle>Pagamento</Styles.StyledTitle>
        <Styles.StyledBody>{paid ? "Pago" : "--"}</Styles.StyledBody>
      </div>
    </Styles.HistoryBox>
  );
}
