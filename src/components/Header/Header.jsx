import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { actions } from '../../redux/slices/user.slice'

import classes from './Header.module.scss'
import avatar from './avatar.png'

export default function Header() {
  // const { isLogined, user } = useSelector((state) => state.user)
  const { isLogined, user } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(actions.clearUser())
    localStorage.clear()
  }

  const nav = !isLogined ? (
    <nav className={classes.nav}>
      <Link className={classes.signIn} to="/sign-in">
        Sign In
      </Link>
      <Link className={classes.signUp} to="/sign-up">
        Sign Up
      </Link>
    </nav>
  ) : (
    <nav className={classes.nav}>
      <Link className={classes.btnCreate} to="/new-article">
        Create article
      </Link>
      <div className={classes.user}>
        <Link to="/profile" className={classes.user__name}>
          {user.username}
        </Link>
        <img className={classes.user__img} src={user.image || avatar} alt="avatar" />
      </div>
      <Link className={classes.logout} to="/article" onClick={logout}>
        Log Out
      </Link>
    </nav>
  )
  return (
    <header className={classes.header}>
      <Link to="/article" className={classes.blog}>
        SuperBlog
      </Link>
      {nav}
    </header>
  )
}
