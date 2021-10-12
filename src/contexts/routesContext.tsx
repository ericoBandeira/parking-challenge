import { createContext, useState, ReactNode } from "react";

interface RoutesContextData {
  changePage: boolean;
  plate: string;
  setPlate: React.Dispatch<React.SetStateAction<string>>;
  setChangePage: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as RoutesContextData);

export function AppProvider({ children }: AppProviderProps) {
  const [plate, setPlate] = useState("");
  const [changePage, setChangePage] = useState(true);

  return (
    <AppContext.Provider
      value={{
        changePage,
        plate,
        setPlate,
        setChangePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
