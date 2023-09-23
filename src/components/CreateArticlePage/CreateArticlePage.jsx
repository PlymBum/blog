import React from 'react'
import { useHistory } from 'react-router'

import Article from '../Article'
import ApiBlog from '../../apiBlog/ApiBlog'

import classes from './CreateArticlePage.module.scss'

export default function CreateArticlePage() {
  const history = useHistory()

  const createArticle = (data) => {
    const token = localStorage.getItem('token')
    if (!token) {
      history.push('/sign-in')
    } else {
      const api = new ApiBlog()
      api.createArticle(data, token).then((a) => history.push(`/article/${a.article.slug}`))
    }
  }
  return (
    <div className={classes.container}>
      <Article onSubmit={createArticle} />
    </div>
  )
}
