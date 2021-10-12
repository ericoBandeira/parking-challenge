import { Link } from "react-router-dom";
import * as Styles from "./styles";

interface Menu {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function RightMenu({ open, setOpen }: Menu) {
  return (
    <Styles.Menu open={open}>
      <Link to="/entrance">Entrada</Link>
      <Link to="/exit">Saída</Link>
    </Styles.Menu>
  );
}
