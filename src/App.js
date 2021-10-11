import Header from "./components/Header/Header";
import { Route, Switch } from "react-router";

function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <h1>home</h1>
        </Route>

        <Route exact path="/movies">
          <h1>movies</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
