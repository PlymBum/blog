import React from 'react'

import classes from './Header.module.scss'
import logo from './Logo.svg'

export default function Header() {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} alt="logo" />
    </header>
  )
}
