import * as Styles from "./styles";

interface Menu {
  open: boolean;
}

export function RightMenu({ open }: Menu) {
  return (
    <Styles.Menu open={open}>
      <li>Entrada</li>
      <li>Saída</li>
    </Styles.Menu>
  );
}
