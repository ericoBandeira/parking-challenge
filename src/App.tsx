import { useContext } from "react";
import { AppContext } from "./contexts/routesContext";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  const { changePage } = useContext(AppContext);

  return changePage ? <HomePage /> : <HistoryPage />;
}

export default App;
