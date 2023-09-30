import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import Article from '../Article'
import { useCreateArticleMutation } from '../../redux/api/blogApi/blog'

import classes from './CreateArticlePage.module.scss'

export default function CreateArticlePage() {
  const history = useHistory()
  const [createArticle, result] = useCreateArticleMutation()

  const onSubmit = (payload) => {
    const token = localStorage.getItem('token')
    if (!token) {
      history.push('/sign-in')
    } else {
      createArticle(payload)
    }
  }
  useEffect(() => {
    if (result.isSuccess) history.push(`/article/${result.data.article.slug}`)
  }, [result])
  return (
    <div className={classes.container}>
      <Article onSubmit={onSubmit} />
    </div>
  )
}
