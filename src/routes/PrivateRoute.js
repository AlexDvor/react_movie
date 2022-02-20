// import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// // import authSelectors from '../redux/auth/auth-selectors';

// export default function PrivateRoute({ children, redirectTo = '/', ...routeProps }) {
//   //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   //   const hasToken = useSelector(authSelectors.getToken);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn || hasToken ? children : <Redirect to={redirectTo} />}
//     </Route>
//   );
// }
