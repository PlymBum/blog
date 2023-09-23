import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Header from '../Header/Header'
import PreviewPage from '../PreviewPage/PreviewPage'
import ArticlePage from '../ArticlePage/ArticlePage'
import SignInPage from '../SignInPage'
import SignUpPage from '../SignUpPage'
import { checkAuth } from '../../redux/user/user.slice'
import EditProfilePage from '../EditProfilePage'
import CreateArticlePage from '../CreateArticlePage/CreateArticlePage'
import PrivateRoute from '../../utils/router/privateRoute'
import EditArticlePage from '../EditArticlePage/EditArticlePage'

function App() {
  // const { isLogined } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  // const history = useHistory()
  // const location = useLocation()
  // console.log(history, 'APP')
  useEffect(() => {
    dispatch(checkAuth())
  }, [])

  return (
    <Router>
      <Header />
      <Route exact path="/article">
        <PreviewPage />
      </Route>
      {/* <Route exact path="/article/:slug">
        {isLogined ? <ArticlePage /> : <Redirect to="/sign-in" />}
      </Route> */}
      <Route exact path="/sign-in">
        <SignInPage />
      </Route>
      <Route exact path="/sign-up">
        <SignUpPage />
      </Route>
      <PrivateRoute exact path="/profile">
        <EditProfilePage />
      </PrivateRoute>
      <PrivateRoute exact path="/new-article">
        <CreateArticlePage />
      </PrivateRoute>
      <PrivateRoute exact path="/article/:slug">
        <ArticlePage />
      </PrivateRoute>
      <PrivateRoute path="/article/:slug/edit">
        <EditArticlePage />
      </PrivateRoute>
      <Route exact path="/">
        <Redirect to="/article" />
      </Route>
    </Router>
  )
}

export default App
