import React, { useState } from 'react'

import classes from './Filter.module.scss'

export default function Filter() {
  const initialState = [
    { id: 1, value: 'Все', isChecked: true },
    { id: 2, value: 'Без пересадок', isChecked: false },
    { id: 3, value: '1 пресадка', isChecked: false },
    { id: 4, value: '2 пересадки', isChecked: false },
    { id: 5, value: '3 пересадки', isChecked: false },
  ]
  const [checkboxList, setCheckboxList] = useState(initialState)

  const toogleChecked = (elId) => {
    const newArr = checkboxList.map((el) => {
      if (el.id === elId) return { ...el, isChecked: !el.isChecked }
      return el
    })
    setCheckboxList(newArr)
  }

  const inputList = checkboxList.map((el) => {
    return (
      <label key={el.id} className={classes.listItem}>
        <input
          className={classes.checkbox}
          checked={el.isChecked}
          type="checkbox"
          onChange={() => toogleChecked(el.id)}
        />
        <span>{el.value}</span>
      </label>
    )
  })

  return (
    <div className={classes.filter}>
      <div>Количество пересадок</div>
      <form className={classes.list}>
        {inputList}
        {/* <label className={classes.listItem}>
          <input className={classes.checkbox} type="checkbox" />
          <span>Все</span>
        </label>
        <label className={classes.listItem}>
          <input className={classes.checkbox} type="checkbox" />
          <span>Без пересадок</span>
        </label>
        <label className={classes.listItem}>
          <input className={classes.checkbox} type="checkbox" />
          <span>1 пресадка</span>
        </label>
        <label className={classes.listItem}>
          <input className={classes.checkbox} type="checkbox" />
          <span>2 пересадки</span>
        </label>
        <label className={classes.listItem}>
          <input className={classes.checkbox} type="checkbox" />
          <span>3 пересадки</span>
        </label> */}
      </form>
    </div>
  )
}
