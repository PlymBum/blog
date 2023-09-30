import React, { useEffect } from 'react'
import { useHistory, withRouter } from 'react-router'

import Article from '../Article'
import Loading from '../Loading'
import { useGetArticleBySlugQuery, useUpdateArticleMutation } from '../../redux/api/blogApi/blog'

import classes from './EditArticlePage.module.scss'

function EditArticlePage({ match }) {
  const history = useHistory()
  const { slug } = match.params
  const [updateArticle, result] = useUpdateArticleMutation()
  const { data: article, isLoading } = useGetArticleBySlugQuery(slug)

  const onSubmit = (data) => {
    const token = localStorage.getItem('token')
    const payload = { slug, body: { ...data } }
    if (!token) {
      history.push('/sign-in')
    } else {
      updateArticle(payload)
    }
  }
  useEffect(() => {
    if (result.isSuccess) history.push(`/article/${slug}`)
  }, [result])

  if (isLoading) return <Loading />

  return (
    <div className={classes.container}>
      <Article onSubmit={onSubmit} data={article.article} />
    </div>
  )
}
export default withRouter(EditArticlePage)
