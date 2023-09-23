/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, withRouter } from 'react-router'

import likeImg from '../ArticlePreview/heart 1.svg'
import { fetchArticle } from '../../redux/articles/article.slice'
// import ApiBlog from '../../apiBlog/ApiBlog'
import ApiBlog from '../../apiBlog/ApiBlog'
import Error from '../Error'

import classes from './ArticlePage.module.scss'

function ArticlePage({ match }) {
  const { slug } = match.params
  const dispatch = useDispatch()
  const { article, isError } = useSelector((state) => state.article)
  const { user } = useSelector((state) => state.user)
  const [post, setPost] = useState(null)
  const [errorComponent, setErrorComponent] = useState(null)
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
  useEffect(() => {
    console.log(isError, 'error')
    if (isError) setErrorComponent(<Error message="filed to load article" />)
  }, [isError])
  useEffect(() => {
    if (article.title) {
      const { title, description, body, createdAt, tagList, favoritesCount, author } = article
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
      setPost(
        <div className={classes.article}>
          <div className={classes.article__preview}>
            <div className={classes.article__title}>
              <h5 className={classes.article__titleText}>{title}</h5>
              <div className={classes.article__likes}>
                <img className={classes.likes__img} src={likeImg} alt="like" />
                <span className={classes.likes__count}>{favoritesCount}</span>
              </div>
            </div>

            <ul className={classes.article__tagsList}>
              {tagList.map((el, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <li className={classes.article__tag} key={i}>
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
      )
    }
  }, [article])

  return (
    <>
      {errorComponent}
      {post}
    </>
  )
}
export default withRouter(ArticlePage)
