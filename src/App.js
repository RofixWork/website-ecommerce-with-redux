import { CssBaseline } from "@material-ui/core";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./components/Cart";
import Details from "./pages/Details";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <CssBaseline />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
