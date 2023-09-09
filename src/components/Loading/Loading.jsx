import React from 'react'
import Spinner from 'react-svg-spinner'

import classes from './Loading.module.scss'

export default function Loading() {
  return (
    <div className={classes.loading}>
      <Spinner />
    </div>
  )
}
