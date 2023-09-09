import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from '../Header/Header'
import PreviewPage from '../PreviewPage/PreviewPage'
import ArticlePage from '../ArticlePage/ArticlePage'

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
    </Router>
  )
}

export default App
