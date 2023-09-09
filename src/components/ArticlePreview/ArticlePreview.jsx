import React from 'react'

import classes from './ArticlePreview.module.scss'
// import avatar from './Rectangle 1.png'
import likeImg from './heart 1.svg'

export default function Article({ title, favoritesCount, tagList, description, author, createdAt }) {
  return (
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
