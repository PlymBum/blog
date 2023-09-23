import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

function PrivateRoute({ children, ...rest }) {
  const { isLogined } = useSelector((state) => state.user)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogined ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
