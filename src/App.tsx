import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/history">
          <HistoryPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
