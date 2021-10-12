import { Link } from "react-router-dom";
import * as Styles from "./styles";

interface Menu {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function RightMenu({ open, setOpen }: Menu) {
  return (
    <Styles.Menu open={open}>
      <Link onClick={() => setOpen(!open)} to="/entrance">
        Entrada
      </Link>
      <Link onClick={() => setOpen(!open)} to="/exit">
        Saída
      </Link>
    </Styles.Menu>
  );
}
