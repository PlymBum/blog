import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sortCheap, sortFast, sortOptimal } from '../redux/sortingActions'
import { sortByCheap } from '../redux/ticketsActions'

import classes from './Sorting.module.scss'

export default function Sorting() {
  const dispatch = useDispatch()
  const { cheap, fast, optimal } = useSelector((state) => state.sort)

  const cheapSort = () => {
    dispatch(sortCheap())
    dispatch(sortByCheap())
  }
  const fastSort = () => {
    dispatch(sortFast())
  }
  const optimalSort = () => {
    dispatch(sortOptimal())
  }

  return (
    <div className={classes.sorting}>
      <nav className={classes.sorting__list}>
        <button type="button" className={`${classes.sorting__item} ${cheap ? classes.active : ''}`} onClick={cheapSort}>
          Дешевый
        </button>
        <button type="button" className={`${classes.sorting__item} ${fast ? classes.active : ''}`} onClick={fastSort}>
          Быстрый
        </button>
        <button
          type="button"
          className={`${classes.sorting__item} ${optimal ? classes.active : ''}`}
          onClick={optimalSort}
        >
          Оптимальный
        </button>
      </nav>
    </div>
  )
}
