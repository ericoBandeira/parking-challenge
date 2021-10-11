import { useContext } from "react";
import { AppContext } from "../../contexts/routesContext";
import * as Styles from "./styles";

interface Menu {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function RightMenu({ open, setOpen }: Menu) {
  const { changeToEntrance, changeToExit } = useContext(AppContext);

  const url =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

  async function goToEntrance() {
    changeToEntrance();
    setOpen(!open);
  }

  async function goToExit() {
    changeToExit();
    setOpen(!open);
  }

  return (
    <Styles.Menu open={open}>
      <button onClick={goToEntrance}>Entrada</button>
      <button onClick={goToExit}>Saída</button>
    </Styles.Menu>
  );
}
