import * as Styles from "./styles";

interface PlateHisoryProps {
  paid: boolean;
  time: string;
  onClick: () => void;
}

export function PaymentHistoryBox({ paid, time, onClick }: PlateHisoryProps) {
  return (
    <Styles.HistoryBox>
      <button onClick={onClick}>
        <div>
          <Styles.StyledTitle>Tempo Atual</Styles.StyledTitle>
          <Styles.StyledBody>
            {time
              .replace(" ", "")
              .replace("minutes", "min")
              .replace("hours", "h")
              .replace("days", "dias")
              .replace("years", "anos")
              .replace("seconds", "s")
              .replace(" ", "")}
          </Styles.StyledBody>
        </div>
        <div>
          <Styles.StyledTitle>Pagamento</Styles.StyledTitle>
          <Styles.StyledBody>{paid ? "Pago" : "—"}</Styles.StyledBody>
        </div>
      </button>
    </Styles.HistoryBox>
  );
}
