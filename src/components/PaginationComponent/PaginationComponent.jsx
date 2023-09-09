import React from 'react'
import { Pagination } from 'antd'

import classes from './PaginationComponent.module.scss'

export default function PaginationComponent({ current, total, onChange, defaultPageSize }) {
  return (
    <div className={classes.pagination}>
      <Pagination
        current={current}
        onChange={onChange}
        total={total}
        defaultPageSize={defaultPageSize}
        showSizeChanger={false}
      />
    </div>
  )
}
