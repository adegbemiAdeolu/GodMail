import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import Home from "./pages/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/my-account" component={AccountPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
