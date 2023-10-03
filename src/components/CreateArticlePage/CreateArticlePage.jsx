import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import Article from '../Article'
import { useCreateArticleMutation } from '../../redux/api/blogApi/blog'

import classes from './CreateArticlePage.module.scss'

export default function CreateArticlePage() {
  const history = useHistory()
  const [createArticle, { isSuccess, isLoading, data }] = useCreateArticleMutation()

  const onSubmit = (payload) => {
    const token = localStorage.getItem('token')
    if (!token) {
      history.push('/sign-in')
    } else {
      createArticle(payload)
    }
  }
  useEffect(() => {
    if (isSuccess) history.push(`/article/${data.article.slug}`)
  }, [isSuccess])
  return (
    <div className={classes.container}>
      <Article onSubmit={onSubmit} isLoading={isLoading} />
    </div>
  )
}
