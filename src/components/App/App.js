import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Header from '../Header/Header'
import PreviewPage from '../PreviewPage/PreviewPage'
import ArticlePage from '../ArticlePage/ArticlePage'
import SignInPage from '../SignInPage'
import SignUpPage from '../SignUpPage'
import { useGetUserInfoQuery } from '../../redux/api/blogApi/user'
import { actions } from '../../redux/slices/user.slice'
import EditProfilePage from '../EditProfilePage'
import CreateArticlePage from '../CreateArticlePage/CreateArticlePage'
import PrivateRoute from '../../utils/router/privateRoute'
import EditArticlePage from '../EditArticlePage/EditArticlePage'

function App() {
  const { data } = useGetUserInfoQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    if (data) dispatch(actions.setUser(data))
  }, [data])

  return (
    <Router>
      <Header />
      <Route exact path="/article">
        <PreviewPage />
      </Route>
      <Route exact path="/sign-up">
        <SignUpPage />
      </Route>
      <Route exact path="/sign-in">
        <SignInPage />
      </Route>
      <PrivateRoute exact path="/article/:slug">
        <ArticlePage />
      </PrivateRoute>
      <PrivateRoute exact path="/new-article">
        <CreateArticlePage />
      </PrivateRoute>
      <PrivateRoute exact path="/profile">
        <EditProfilePage />
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
