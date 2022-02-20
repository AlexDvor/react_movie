import AppBar from './components/AppBar/AppBar';
import { Switch, Redirect } from 'react-router';
import { Main, WrapperFooter } from './App.styled';
// Pages
import HomePage from './pages/HomePage/HomePage';
import AboutMoviePage from './pages/AboutMoviePage/AboutMoviePage';
import MyListPage from './pages/MyListPage/MyListPage';
import SearchPage from './pages/SearchPage/SearchPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LogInPage from './pages/LogInPage/LogInPage';
import { Footer } from './components/Footer/Footer';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <>
      <AppBar></AppBar>

      <Main>
        <Switch>
          <PublicRoute path="/" exact redirectTo="/home" restricted>
            <Redirect to="/login" />
          </PublicRoute>

          <PublicRoute path="/signup" redirectTo="/home" restricted>
            <SignUpPage />
          </PublicRoute>

          <PublicRoute path="/login" exact redirectTo="/home" restricted>
            <LogInPage />
          </PublicRoute>

          <PrivateRoute exact path="/home">
            <HomePage />
          </PrivateRoute>

          <PrivateRoute exact path="/movies/:movieId">
            <AboutMoviePage />
          </PrivateRoute>

          <PrivateRoute exact path="/my_list">
            <MyListPage />
          </PrivateRoute>

          <PrivateRoute exact path="/search">
            <SearchPage />
          </PrivateRoute>
        </Switch>
      </Main>

      <WrapperFooter>
        <Footer />
      </WrapperFooter>
    </>
  );
}

export default App;
