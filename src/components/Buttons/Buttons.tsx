import * as Styles from "./styles";

interface buttonProps {
  children: string;
  purple: boolean;
  outline: boolean;
  disabled: boolean;
  onClick?: () => void;
}

export function Buttons({
  children,
  purple,
  outline,
  disabled,
  onClick,
}: buttonProps) {
  return (
    <Styles.ButtonContainer
      purple={purple}
      disabled={disabled}
      outline={outline}
      onClick={onClick}
    >
      {children}
    </Styles.ButtonContainer>
  );
}
