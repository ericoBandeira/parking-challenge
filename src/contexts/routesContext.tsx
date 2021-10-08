import { createContext, useState, ReactNode } from "react";

interface RoutesContextData {
  entrance: boolean;
  exit: boolean;
  setEntrance: React.Dispatch<React.SetStateAction<boolean>>;
  setExit: React.Dispatch<React.SetStateAction<boolean>>;
  changeToEntrance: () => void;
  changeToExit: () => void;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as RoutesContextData);

export function AppProvider({ children }: AppProviderProps) {
  const [entrance, setEntrance] = useState(true);
  const [exit, setExit] = useState(false);

  function changeToEntrance() {
    setEntrance(true);
    setExit(false);
  }
  function changeToExit() {
    setEntrance(false);
    setExit(true);
  }
  return (
    <AppContext.Provider
      value={{
        entrance,
        exit,
        setEntrance,
        setExit,
        changeToEntrance,
        changeToExit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
