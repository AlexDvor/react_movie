import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getToken } from '../redux/auth/auth-selectors';

export default function PrivateRoute({ children, redirectTo = '/', ...routeProps }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const hasToken = useSelector(getToken);
  return (
    <Route {...routeProps}>
      {isLoggedIn && hasToken ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
