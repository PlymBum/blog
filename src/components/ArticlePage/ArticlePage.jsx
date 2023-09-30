/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-globals */
import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router'

// import ApiBlog from '../../apiBlog/ApiBlog'
import Error from '../Error'
import Loading from '../Loading'
import { useGetArticleBySlugQuery, useToogleFavoriteArticleMutation } from '../../redux/api/blogApi/blog'
import ArticleFull from '../ArticleFull'

function ArticlePage({ match }) {
  const { slug } = match.params
  const { user } = useSelector((state) => state.user)
  const [toogleFavorite] = useToogleFavoriteArticleMutation()

  const { data, isLoading } = useGetArticleBySlugQuery(slug)

  const favorite = (postSlug, bool) => {
    const token = localStorage.getItem('token')
    if (!token) history.push('/sign-in')
    else {
      const payload = {
        slug: postSlug,
        favorite: bool,
      }
      toogleFavorite(payload)
    }
  }
  const elem = isLoading ? (
    <Loading />
  ) : data ? (
    <ArticleFull
      article={data.article}
      showController={user.username === data.article.author.username}
      toogleFavorite={favorite}
    />
  ) : (
    <Error message="filed to load article" />
  )
  return elem
}
export default withRouter(ArticlePage)
