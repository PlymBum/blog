import React from 'react'
import { ThreeDotsScale } from 'react-svg-spinners'

import classes from './Loading.module.scss'

export default function Loading() {
  return (
    <div className={classes.loading}>
      <ThreeDotsScale color="#2196F3" width={50} height={50} />
    </div>
  )
}
