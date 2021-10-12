import { useContext } from "react";
import { AppContext } from "../../contexts/routesContext";
import * as Styles from "./styles";

interface Menu {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function RightMenu({ open, setOpen }: Menu) {
  return (
    <Styles.Menu open={open}>
      <button
        onClick={() => {
          window.location.href = "/entrance";
        }}
      >
        Entrada
      </button>
      <button
        onClick={() => {
          window.location.href = "/exit";
        }}
      >
        Saída
      </button>
    </Styles.Menu>
  );
}
