import * as Styles from "./styles";

interface buttonProps {
  children: string;
  purple: boolean;
  outline: boolean;
  disabled: boolean;
}

export function Buttons({ children, purple, outline, disabled }: buttonProps) {
  return (
    <Styles.ButtonContainer
      purple={purple}
      disabled={disabled}
      outline={outline}
    >
      {children}
    </Styles.ButtonContainer>
  );
}
