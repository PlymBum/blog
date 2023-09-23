import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { fetchArticles } from '../../redux/articles/articles.slice'
import PaginationComponent from '../PaginationComponent/PaginationComponent'
import ArticlePreview from '../ArticlePreview'
import Loading from '../Loading'
import Error from '../Error/Error'
import ApiBlog from '../../apiBlog/ApiBlog'

export default function PreviewPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const { articles, count, isLoading, isError } = useSelector((state) => state.articles)
  const dispatch = useDispatch()
  const history = useHistory()
  const api = new ApiBlog()

  const changePage = (page) => {
    setCurrentPage(page)
  }
  const toogleFavorite = (slug, bool) => {
    const token = localStorage.getItem('token')
    if (!token) {
      history.push('/sign-in')
    } else {
      api.toogleFavorite(slug, token, bool).then(dispatch(fetchArticles(currentPage * 20 - 20, token)))
    }
  }
  // useEffect(() => {
  //   dispatch(fetchArticles(currentPage * 20 - 20))
  // }, [])

  useEffect(() => {
    const token = localStorage.getItem('token') || ''
    dispatch(fetchArticles(currentPage * 20 - 20, token))
  }, [currentPage])

  const loading = isLoading ? <Loading /> : null

  const pagination = !isLoading ? (
    <PaginationComponent current={currentPage} total={count} onChange={changePage} defaultPageSize={20} />
  ) : null

  const error = isError && !isLoading ? <Error /> : null

  const articlesList =
    !isLoading && !isError
      ? articles.map((el) => {
          return (
            <ArticlePreview
              key={el.slug}
              slug={el.slug}
              title={el.title}
              favoritesCount={el.favoritesCount}
              tagList={el.tagList}
              description={el.description}
              author={el.author}
              createdAt={el.createdAt}
              toogleFavorite={toogleFavorite}
              favorited={el.favorited}
            />
          )
        })
      : null
  return (
    <div>
      {error}
      {loading}
      {articlesList}
      {pagination}
    </div>
  )
}
