import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { toogleChecked, setAllChecked, setAllUnchecked, setChexboxAllUnchecked } from '../redux/filterActions'
import { filterTicketsAdd, filterTicketsDelet } from '../redux/ticketsActions'

import classes from './Filter.module.scss'

export default function Filter() {
  const dispatch = useDispatch()
  const { all, one, two, three, without } = useSelector((state) => state.filter)

  const toogleCheckedAll = () => {
    if (one && two && three && without) {
      dispatch(setAllUnchecked())
    } else dispatch(setAllChecked())
  }
  const toogleCheckedWithout = () => {
    if (!without) dispatch(filterTicketsAdd('without'))
    else dispatch(filterTicketsDelet('without'))
    dispatch(toogleChecked({ without: !without }))
  }
  const toogleCheckedOne = () => {
    if (!one) dispatch(filterTicketsAdd('one'))
    else dispatch(filterTicketsDelet('one'))
    dispatch(toogleChecked({ one: !one }))
  }
  const toogleCheckedTwo = () => {
    if (!two) dispatch(filterTicketsAdd('two'))
    else dispatch(filterTicketsDelet('two'))
    dispatch(toogleChecked({ two: !two }))
  }
  const toogleCheckedThree = () => {
    if (!three) dispatch(filterTicketsAdd('three'))
    else dispatch(filterTicketsDelet('three'))
    dispatch(toogleChecked({ three: !three }))
  }
  useEffect(() => {
    if (!one || !two || !without || !three) {
      dispatch(setChexboxAllUnchecked())
    }
    if (one && two && three && without) {
      dispatch(setAllChecked())
    }
  }, [all, one, two, three, without])

  return (
    <div className={classes.filter}>
      <div>Количество пересадок</div>
      <form className={classes.list}>
        {/* {inputList} */}
        <label className={classes.listItem}>
          <input className={classes.checkbox} type="checkbox" checked={all} onChange={toogleCheckedAll} />
          <span>Все</span>
        </label>
        <label className={classes.listItem}>
          <input className={classes.checkbox} type="checkbox" checked={without} onChange={toogleCheckedWithout} />
          <span>Без пересадок</span>
        </label>
        <label className={classes.listItem}>
          <input className={classes.checkbox} type="checkbox" checked={one} onChange={toogleCheckedOne} />
          <span>1 пресадка</span>
        </label>
        <label className={classes.listItem}>
          <input className={classes.checkbox} type="checkbox" checked={two} onChange={toogleCheckedTwo} />
          <span>2 пересадки</span>
        </label>
        <label className={classes.listItem}>
          <input className={classes.checkbox} type="checkbox" checked={three} onChange={toogleCheckedThree} />
          <span>3 пересадки</span>
        </label>
      </form>
    </div>
  )
}
