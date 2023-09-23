/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Link } from 'react-router-dom'

import classes from './ArticlePreview.module.scss'
// import avatar from './Rectangle 1.png'
import heart from './heart.svg'
import heartActive from './Heart_active.svg'

export default function Article({
  title,
  favoritesCount,
  favorited,
  tagList,
  description,
  author,
  createdAt,
  slug,
  toogleFavorite,
}) {
  return (
    <div className={classes.article}>
      <div className={classes.article__preview}>
        <div className={classes.article__title}>
          <Link to={`/article/${slug}`} className={classes.article__titleText}>
            {title}
          </Link>
          <div className={classes.article__likes} onClick={() => toogleFavorite(slug, favorited)}>
            <img className={classes.likes__img} src={favorited ? heartActive : heart} alt="like" />
            <span className={classes.likes__count}>{favoritesCount}</span>
          </div>
        </div>

        <ul className={classes.article__tagsList}>
          {tagList.map((el, id) => (
            // eslint-disable-next-line react/no-array-index-key
            <li className={classes.article__tag} key={id}>
              {el}
            </li>
          ))}
          {/* <li className={classes.article__tag}>Tag 1</li>
          <li className={classes.article__tag}>Tag 2</li> */}
        </ul>
        <div className={classes.article__text}>{description}</div>
      </div>
      <div className={classes.article__autor}>
        <div>
          <div className={classes.autor__name}>{author.username}</div>
          <div className={classes.article__created}>{createdAt}</div>
        </div>

        <img className={classes.autor__avatar} src={author.image} alt="avatar" />
      </div>
    </div>
  )
}
