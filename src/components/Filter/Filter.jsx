import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { toogleIsChecked, toogleALL } from '../redux/filterActions'

import classes from './Filter.module.scss'

export default function Filter() {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filter.filters)

  const toogleChecked = (id) => {
    dispatch(toogleIsChecked(id))
  }

  const inputList = filters.map((el) => {
    return (
      <label key={el.id} className={classes.listItem}>
        <input
          className={classes.checkbox}
          checked={el.isChecked}
          type="checkbox"
          onChange={el.id === 1 ? () => dispatch(toogleALL()) : () => toogleChecked(el.id)}
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
          <input className={classes.checkbox} type="checkbox" checked={allChecked} onChange={toogleAll} />
          <span>Все</span>
        </label>
        <label className={classes.listItem}>
          <input className={classes.checkbox} type="checkbox" checked={whithoutTransfer} onChange={toogleWithout} />
          <span>Без пересадок</span>
        </label>
        <label className={classes.listItem}>
          <input className={classes.checkbox} type="checkbox" checked={oneTransfer} onChange={toogleOne} />
          <span>1 пресадка</span>
        </label>
        <label className={classes.listItem}>
          <input className={classes.checkbox} type="checkbox" checked={twoTransfer} onChange={toogleTwo} />
          <span>2 пересадки</span>
        </label>
        <label className={classes.listItem}>
          <input className={classes.checkbox} type="checkbox" checked={threeTransfer} onChange={toogleThree} />
          <span>3 пересадки</span>
        </label> */}
      </form>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     state,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   const { toogleChecked } = bindActionCreators(actions, dispatch)
//   return {
//     toogleChecked,
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Filter)
