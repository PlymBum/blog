import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from '../Header/Header'
import PreviewPage from '../PreviewPage/PreviewPage'
import ArticlePage from '../ArticlePage/ArticlePage'
import SignInPage from '../SignInPage'
import SignUpPage from '../SignUpPage'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/article">
        <PreviewPage />
      </Route>
      <Route exact path="/article/:slug">
        <ArticlePage />
      </Route>
      <Route exact path="/sign-in">
        <SignInPage />
      </Route>
      <Route exact path="/sign-up">
        <SignUpPage />
      </Route>
    </Router>
  )
}

export default App
