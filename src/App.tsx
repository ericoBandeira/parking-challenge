import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/entrance">
          <HomePage entrance={true} />
        </Route>
        <Route exact path="/exit">
          <HomePage entrance={false} />
        </Route>
        <Route exact path="/history">
          <HistoryPage />
        </Route>
        <Route exact path="*" render={() => <Redirect to="/entrance" />} />
      </Switch>
    </Router>
  );
}

export default App;
