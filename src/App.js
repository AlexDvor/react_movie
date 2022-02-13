// import AppBar from './components/AppBar/AppBar';
// import { Route, Switch } from 'react-router';
// // Pages
// import HomePage from './pages/HomePage/HomePage';
// import AboutMoviePage from './pages/AboutMoviePage/AboutMoviePage';
// import MyListPage from './pages/MyListPage/MyListPage';
// import SearchPage from './pages/SearchPage/SearchPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
// import { Footer } from './components/Footer/Footer';

// import { Main, WrapperFooter } from './App.styled';

function App() {
  return (
    <>
      <SignUpPage />
      {/* <AppBar></AppBar>

      <Main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/movies/:movieId">
            <AboutMoviePage />
          </Route>

          <Route exact path="/my_list">
            <MyListPage />
          </Route>

          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Main>

      <WrapperFooter>
        <Footer />
      </WrapperFooter> */}
    </>
  );
}

export default App;
