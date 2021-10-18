import Header from './components/Header/Header';
import { Route, Switch } from 'react-router';
// Pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path="/react_movies">
          <HomePage />
        </Route>

        <Route exact path="/movies">
          <h1>movies</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
