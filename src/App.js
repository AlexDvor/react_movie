import { Switch, Redirect } from 'react-router';
import { Main, WrapperFooter } from './App.styled';
import { getIsLoggedIn } from './redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
// Pages
import HomePage from './pages/HomePage/HomePage';
import AboutMoviePage from './pages/AboutMoviePage/AboutMoviePage';
import MyListPage from './pages/MyListPage/MyListPage';
import SearchPage from './pages/SearchPage/SearchPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LogInPage from './pages/LogInPage/LogInPage';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
//components
import Footer from './components/Footer/Footer';
import AppBar from './components/AppBar/AppBar';

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      {isLoggedIn && <AppBar />}
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

      {isLoggedIn && (
        <WrapperFooter>
          <Footer />
        </WrapperFooter>
      )}
    </>
  );
}

export default App;
