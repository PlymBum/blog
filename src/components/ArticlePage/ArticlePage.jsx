/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, withRouter } from 'react-router'

import { fetchArticle } from '../../redux/articles/article.slice'
import ApiBlog from '../../apiBlog/ApiBlog'
import Error from '../Error'
import Loading from '../Loading'
import heartActive from '../ArticlePreview/Heart_active.svg'
import heart from '../ArticlePreview/heart.svg'

import classes from './ArticlePage.module.scss'

function ArticlePage({ match }) {
  const { slug } = match.params
  const dispatch = useDispatch()
  const { article, isError, isLoading } = useSelector((state) => state.article)
  const { user } = useSelector((state) => state.user)
  const history = useHistory()
  const api = new ApiBlog()

  useEffect(() => {
    dispatch(fetchArticle(slug))
  }, [])

  const goEdit = () => {
    history.push(`/article/${slug}/edit`)
  }
  const deleteArticle = () => {
    const token = localStorage.getItem('token')
    if (!token) history.push('/article')
    const answer = confirm('Are you sure you want to delete the post?')
    if (answer) {
      api.deleteArticle(token, slug).then(history.push('/article'))
    }
  }

  if (!article.title) {
    return <Loading />
  }

  const { title, description, body, createdAt, tagList, favoritesCount, author, favorited } = article
  const errorComponent = isError ? <Error message="filed to load article" /> : null

  const controller =
    user.username === author.username ? (
      <div className={classes.article__controllers}>
        <button
          className={`${classes.article__btn} ${classes.article__btn_delete}`}
          type="button"
          onClick={deleteArticle}
        >
          Delete
        </button>
        <button className={`${classes.article__btn} ${classes.article__btn_edit}`} type="button" onClick={goEdit}>
          Edit
        </button>
      </div>
    ) : null

  const post =
    !isLoading && !isError ? (
      <div className={classes.article}>
        <div className={classes.article__preview}>
          <div className={classes.article__title}>
            <h5 className={classes.article__titleText}>{title}</h5>
            <div className={classes.article__likes}>
              <img className={classes.likes__img} src={favorited ? heartActive : heart} alt="like" />
              <span className={classes.likes__count}>{favoritesCount}</span>
            </div>
          </div>
          <ul className={classes.article__tagsList}>
            {tagList.map((el) => (
              <li className={classes.article__tag} key={el}>
                {el}
              </li>
            ))}
          </ul>
          <div className={classes.article__description}>{description}</div>
          <div className={classes.article__text}>
            <ReactMarkdown>{body}</ReactMarkdown>
          </div>
        </div>
        <div className={classes.article__user}>
          <div className={classes.article__autor}>
            <div>
              <div className={classes.autor__name}>{author.username}</div>
              <div className={classes.article__created}>{createdAt}</div>
            </div>

            <img className={classes.autor__avatar} src={author.image} alt="avatar" />
          </div>
          {controller}
        </div>
      </div>
    ) : null

  return (
    <>
      {errorComponent}
      {post}
    </>
  )
}
export default withRouter(ArticlePage)
