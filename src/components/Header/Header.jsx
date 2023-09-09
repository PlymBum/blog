import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Header.module.scss'

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.blog}>SuperBlog</div>
      <nav className={classes.nav}>
        <Link className={classes.signIn} to="/sign-in">
          Sign In
        </Link>
        <Link className={classes.signUp} to="/sign-up">
          Sign Up
        </Link>
      </nav>
    </header>
  )
}
