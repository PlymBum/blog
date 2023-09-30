import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { useGetArticlesQuery, useToogleFavoriteArticleMutation } from '../../redux/api/blogApi/blog'
import PaginationComponent from '../PaginationComponent/PaginationComponent'
import ArticlePreview from '../ArticlePreview'
import Loading from '../Loading'
import Error from '../Error/Error'

export default function PreviewPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading } = useGetArticlesQuery(currentPage * 20 - 20)
  const history = useHistory()

  const [toogleFavorite] = useToogleFavoriteArticleMutation()
  const changePage = (page) => {
    setCurrentPage(page)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  const favorite = (slug, bool) => {
    const token = localStorage.getItem('token')
    if (!token) {
      history.push('/sign-in')
    } else {
      const payload = {
        slug,
        favorite: bool,
      }
      toogleFavorite(payload)
    }
  }

  // useEffect(() => {
  // const token = localStorage.getItem('token') || ''

  //   dispatch(fetchArticles(currentPage * 20 - 20, token))
  // }, [currentPage])

  const loading = isLoading ? <Loading /> : null

  const pagination = !isLoading ? (
    <PaginationComponent current={currentPage} total={data.articlesCount} onChange={changePage} defaultPageSize={20} />
  ) : null

  const errorComponent = error && !isLoading ? <Error /> : null

  const articlesList =
    !isLoading && !error
      ? data.articles.map((el) => {
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
              toogleFavorite={favorite}
              favorited={el.favorited}
            />
          )
        })
      : null
  return (
    <div>
      {errorComponent}
      {loading}
      {articlesList}
      {pagination}
    </div>
  )
}
