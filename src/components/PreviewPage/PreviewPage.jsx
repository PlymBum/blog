import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchArticles } from '../../redux/articles/articles.slice'
import PaginationComponent from '../PaginationComponent/PaginationComponent'
import ArticlePreview from '../ArticlePreview'
import Loading from '../Loading'
import Error from '../Error/Error'

export default function PreviewPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const { articles, count, isLoading, isError } = useSelector((state) => state.articles)
  const dispatch = useDispatch()

  const changePage = (page) => {
    setCurrentPage(page)
  }
  useEffect(() => {
    dispatch(fetchArticles(currentPage * 20 - 20))
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
              title={el.title}
              favoritesCount={el.favoritesCount}
              tagList={el.tagList}
              description={el.description}
              author={el.author}
              createdAt={el.createdAt}
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
