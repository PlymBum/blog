import React from 'react'
import ReactMarkdown from 'react-markdown'

import likeImg from '../ArticlePreview/heart 1.svg'
import avatar from '../ArticlePreview/Rectangle 1.png'

import classes from './ArticlePage.module.scss'

const text = `"After route actions are called, the data will be revalidated automatically and return the latest result from
your loader.\n\nNote that useLoaderData does not initiate a fetch. It simply reads the result of a fetch React
Router manages internally, so you don't need to worry about it refetching when it re-renders for reasons
outside of routing.\n\nThis also means data returned is stable between renders, so you can safely pass it to
dependency arrays in React hooks like useEffect. It only changes when the loader is called again after actions
or certain navigations. In these cases the identity will change (even if the values don't).\n\nYou can use
this hook in any component or any custom hook, not just the Route element. It will return the data from the
nearest route on context.""After route actions are called, the data will be revalidated automatically and return the latest result from
your loader.\n\nNote that useLoaderData does not initiate a fetch. It simply reads the result of a fetch React
Router manages internally, so you don't need to worry about it refetching when it re-renders for reasons
outside of routing.\n\nThis also means data returned is stable between renders, so you can safely pass it to
dependency arrays in React hooks like useEffect. It only changes when the loader is called again after actions
or certain navigations. In these cases the identity will change (even if the values don't).\n\nYou can use
this hook in any component or any custom hook, not just the Route element. It will return the data from the
nearest route on context.""After route actions are called, the data will be revalidated automatically and return the latest result from
your loader.\n\nNote that useLoaderData does not initiate a fetch. It simply reads the result of a fetch React
Router manages internally, so you don't need to worry about it refetching when it re-renders for reasons
outside of routing.\n\nThis also means data returned is stable between renders, so you can safely pass it to
dependency arrays in React hooks like useEffect. It only changes when the loader is called again after actions
or certain navigations. In these cases the identity will change (even if the values don't).\n\nYou can use
this hook in any component or any custom hook, not just the Route element. It will return the data from the
nearest route on context.""After route actions are called, the data will be revalidated automatically and return the latest result from
your loader.\n\nNote that useLoaderData does not initiate a fetch. It simply reads the result of a fetch React
Router manages internally, so you don't need to worry about it refetching when it re-renders for reasons
outside of routing.\n\nThis also means data returned is stable between renders, so you can safely pass it to
dependency arrays in React hooks like useEffect. It only changes when the loader is called again after actions
or certain navigations. In these cases the identity will change (even if the values don't).\n\nYou can use
this hook in any component or any custom hook, not just the Route element. It will return the data from the
nearest route on context.""After route actions are called, the data will be revalidated automatically and return the latest result from
your loader.\n\nNote that useLoaderData does not initiate a fetch. It simply reads the result of a fetch React
Router manages internally, so you don't need to worry about it refetching when it re-renders for reasons
outside of routing.\n\nThis also means data returned is stable between renders, so you can safely pass it to
dependency arrays in React hooks like useEffect. It only changes when the loader is called again after actions
or certain navigations. In these cases the identity will change (even if the values don't).\n\nYou can use
this hook in any component or any custom hook, not just the Route element. It will return the data from the
nearest route on context.""After route actions are called, the data will be revalidated automatically and return the latest result from
your loader.\n\nNote that useLoaderData does not initiate a fetch. It simply reads the result of a fetch React
Router manages internally, so you don't need to worry about it refetching when it re-renders for reasons
outside of routing.\n\nThis also means data returned is stable between renders, so you can safely pass it to
dependency arrays in React hooks like useEffect. It only changes when the loader is called again after actions
or certain navigations. In these cases the identity will change (even if the values don't).\n\nYou can use
this hook in any component or any custom hook, not just the Route element. It will return the data from the
nearest route on context.""After route actions are called, the data will be revalidated automatically and return the latest result from
your loader.\n\nNote that useLoaderData does not initiate a fetch. It simply reads the result of a fetch React
Router manages internally, so you don't need to worry about it refetching when it re-renders for reasons
outside of routing.\n\nThis also means data returned is stable between renders, so you can safely pass it to
dependency arrays in React hooks like useEffect. It only changes when the loader is called again after actions
or certain navigations. In these cases the identity will change (even if the values don't).\n\nYou can use
this hook in any component or any custom hook, not just the Route element. It will return the data from the
nearest route on context.""After route actions are called, the data will be revalidated automatically and return the latest result from
your loader.\n\nNote that useLoaderData does not initiate a fetch. It simply reads the result of a fetch React
Router manages internally, so you don't need to worry about it refetching when it re-renders for reasons
outside of routing.\n\nThis also means data returned is stable between renders, so you can safely pass it to
dependency arrays in React hooks like useEffect. It only changes when the loader is called again after actions
or certain navigations. In these cases the identity will change (even if the values don't).\n\nYou can use
this hook in any component or any custom hook, not just the Route element. It will return the data from the
nearest route on context."`

export default function ArticlePage() {
  return (
    <div className={classes.article}>
      <div className={classes.article__preview}>
        <div className={classes.article__title}>
          <h5 className={classes.article__titleText}>Some article title</h5>
          <div className={classes.article__likes}>
            <img className={classes.likes__img} src={likeImg} alt="like" />
            <span className={classes.likes__count}>1</span>
          </div>
        </div>

        <ul className={classes.article__tagsList}>
          <li className={classes.article__tag}>Tag 1</li>
          <li className={classes.article__tag}>Tag 2</li>
        </ul>
        <div className={classes.article__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </div>
        <div className={classes.article__text}>
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
      <div className={classes.article__autor}>
        <div>
          <div className={classes.autor__name}>John Doe</div>
          <div className={classes.article__created}>March 5, 2020 </div>
        </div>

        <img className={classes.autor__avatar} src={avatar} alt="avatar" />
      </div>
    </div>
  )
}
