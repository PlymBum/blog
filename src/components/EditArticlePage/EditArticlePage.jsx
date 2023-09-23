import React, { useEffect } from 'react'
import { useHistory, withRouter } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Article from '../Article'
import ApiBlog from '../../apiBlog/ApiBlog'
import { fetchArticle } from '../../redux/articles/article.slice'
import Loading from '../Loading'

import classes from './EditArticlePage.module.scss'

function EditArticlePage({ match }) {
  const history = useHistory()
  const dispatch = useDispatch()
  const { article } = useSelector((state) => state.article)

  const { slug } = match.params
  useEffect(() => {
    dispatch(fetchArticle(slug))
  }, [])

  const updateArticle = (data) => {
    const token = localStorage.getItem('token')
    if (!token) {
      history.push('/sign-in')
    } else {
      const api = new ApiBlog()
      api.updateArticle(slug, data, token).then((a) => history.push(`/article/${a.article.slug}`))
    }
  }

  if (!article.title) return <Loading />

  return (
    <div className={classes.container}>
      <Article onSubmit={updateArticle} data={article} />
    </div>
  )
}
export default withRouter(EditArticlePage)
