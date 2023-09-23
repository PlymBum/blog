import React from 'react'

import classes from './Error.module.scss'

export default function Error({ message }) {
  return <span className={classes.error}>{message}</span>
}
