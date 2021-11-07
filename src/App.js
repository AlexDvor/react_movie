import AppBar from './components/AppBar/AppBar';
import { Route, Switch } from 'react-router';
// Pages
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';

function App() {
  return (
    <>
      <AppBar></AppBar>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route exact path="/movies">
          <h1>movies</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
