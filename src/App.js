import AppBar from './components/AppBar/AppBar';
import { Route, Switch } from 'react-router';
// Pages
import HomePage from './pages/HomePage/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MyListPage from './pages/MyListPage/MyListPage';
import AdditionalInfoPage from './pages/AdditionalInfoPage/AdditionalInfoPage';
import SearchPage from './pages/SearchPage/SearchPage';
// import { Footer } from './components/Footer/Footer';

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

        <Route exact path="/my_list">
          <MyListPage />
        </Route>

        <Route exact path="/movies/:movieId/actors">
          <AdditionalInfoPage />
        </Route>

        <Route exact path="/search">
          <SearchPage />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
