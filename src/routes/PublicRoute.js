import { Route, Redirect } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function PublicRoute({
  children,
  redirectTo = '/',
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <Route {...routeProps}>{shouldRedirect ? <Redirect to={redirectTo} /> : children}</Route>;
}
