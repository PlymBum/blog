import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import chaggeSort from '../redux/sortingActions'

import classes from './Sorting.module.scss'

export default function Sorting() {
  const dispatch = useDispatch()
  const sortBtns = useSelector((state) => state.sort)

  const toogleActive = (id) => {
    dispatch(chaggeSort(id))
  }

  const sortingList = sortBtns.map((el) => {
    return (
      <button
        type="button"
        className={`${classes.sorting__item} ${el.isActive ? classes.active : ''}`}
        key={el.id}
        onClick={() => toogleActive(el.id)}
      >
        {el.text}
      </button>
    )
  })

  return (
    <div className={classes.sorting}>
      <nav className={classes.sorting__list}>{sortingList}</nav>
    </div>
  )
}
