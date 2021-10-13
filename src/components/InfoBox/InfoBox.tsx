import * as Styles from "./styles";
import { ReactComponent as RedInformation } from "../../assets/ic_exclamation-mark.svg";
import { ReactComponent as GreenInformation } from "../../assets/ic.svg";

interface informationProps {
  information: boolean;
  children?: string;
}

export function InfoBox({ information, children }: informationProps) {
  return (
    <Styles.informationContainer info={information}>
      {information ? <GreenInformation /> : <RedInformation />}
      {children}
    </Styles.informationContainer>
  );
}
