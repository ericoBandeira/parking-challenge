import { useContext } from "react";
import { AppContext } from "../../contexts/routesContext";
import * as Styles from "./styles";

interface Menu {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function RightMenu({ open, setOpen }: Menu) {
  const { changeToEntrance, changeToExit } = useContext(AppContext);

  return (
    <Styles.Menu open={open}>
      <button
        onClick={() => {
          changeToEntrance();
          window.location.href = "/";
          setOpen(!open);
        }}
      >
        Entrada
      </button>
      <button
        onClick={() => {
          changeToExit();
          window.location.href = "/";
          setOpen(!open);
        }}
      >
        Saída
      </button>
    </Styles.Menu>
  );
}
