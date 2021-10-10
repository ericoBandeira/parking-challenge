import { HomePage } from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Exit } from "./components/Exit/Exit";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/historico">
          <Exit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
