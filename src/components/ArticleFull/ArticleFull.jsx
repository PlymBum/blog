/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { useHistory } from 'react-router'
import format from 'date-fns/format'

import heartActive from '../ArticlePreview/Heart_active.svg'
import heart from '../ArticlePreview/heart.svg'
import { useDeleteArticleMutation } from '../../redux/api/blogApi/blog'

import classes from './ArticleFull.module.scss'

export default function ArticleFull({ article, showController, toogleFavorite }) {
  const history = useHistory()
  const { title, description, body, createdAt, tagList, favoritesCount, author, favorited, slug } = article

  const navigate = () => {
    history.push(`/article/${slug}/edit`)
  }
  const [deleteArticle, { isSuccess }] = useDeleteArticleMutation()
  const remove = () => {
    const answer = confirm('Are you sure you want to delete the post?')
    if (answer) {
      deleteArticle(slug)
    }
  }
  useEffect(() => {
    if (isSuccess) history.push('/')
  }, [isSuccess])

  const controller = showController ? (
    <div className={classes.article__controllers}>
      <button className={`${classes.article__btn} ${classes.article__btn_delete}`} type="button" onClick={remove}>
        Delete
      </button>
      <button className={`${classes.article__btn} ${classes.article__btn_edit}`} type="button" onClick={navigate}>
        Edit
      </button>
    </div>
  ) : null

  return (
    <div className={classes.article}>
      <div className={classes.article__preview}>
        <div className={classes.article__title}>
          <h5 className={classes.article__titleText}>{title}</h5>
          <div className={classes.article__likes} onClick={() => toogleFavorite(slug, !favorited)}>
            <img className={classes.likes__img} src={favorited ? heartActive : heart} alt="like" />
            <span className={classes.likes__count}>{favoritesCount}</span>
          </div>
        </div>
        <ul className={classes.article__tagsList}>
          {tagList.map((el) => {
            if (el.length > 0 && el.trim().length > 0)
              return (
                <li className={classes.article__tag} key={el}>
                  {el}
                </li>
              )
          })}
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
            <div className={classes.article__created}>{format(new Date(createdAt), 'PP')}</div>
          </div>

          <img className={classes.autor__avatar} src={author.image} alt="avatar" />
        </div>
        {controller}
      </div>
    </div>
  )
}
