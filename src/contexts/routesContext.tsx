import { createContext, useState, ReactNode } from "react";

interface RoutesContextData {
  entrance: boolean;
  exit: boolean;
  changePage: boolean;
  plate: string;
  changeToEntrance: () => void;
  changeToExit: () => void;
  setPlate: React.Dispatch<React.SetStateAction<string>>;
  setEntrance: React.Dispatch<React.SetStateAction<boolean>>;
  setExit: React.Dispatch<React.SetStateAction<boolean>>;
  setChangePage: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as RoutesContextData);

export function AppProvider({ children }: AppProviderProps) {
  const [entrance, setEntrance] = useState(true);
  const [exit, setExit] = useState(false);
  const [plate, setPlate] = useState("");
  const [changePage, setChangePage] = useState(true);

  function changeToEntrance() {
    setChangePage(true);
    setEntrance(true);
    setExit(false);
  }

  function changeToExit() {
    setChangePage(true);
    setEntrance(false);
    setExit(true);
  }

  return (
    <AppContext.Provider
      value={{
        entrance,
        exit,
        changePage,
        plate,
        changeToEntrance,
        changeToExit,
        setPlate,
        setEntrance,
        setExit,
        setChangePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
