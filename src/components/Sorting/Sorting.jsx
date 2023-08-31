/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'

import classes from './Sorting.module.scss'

export default function Sorting() {
  const initialState = [
    { text: 'ДЕШЕВЫЙ', id: 1, isActive: true },
    { text: 'БЫСТРЫЙ', id: 2, isActive: false },
    { text: 'ОПТИМАЛЬНЫЙ', id: 3, isActive: false },
  ]

  const [sorting, setSorting] = useState(initialState)

  const toogleActive = (btnId) => {
    const newArr = sorting.map((el) => {
      if (el.id === btnId) return { ...el, isActive: true }
      return { ...el, isActive: false }
    })
    setSorting(newArr)
  }

  const sortingList = sorting.map((el) => {
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
