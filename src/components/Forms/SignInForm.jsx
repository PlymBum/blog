import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Error from '../Error'
import { useLoginUserMutation } from '../../redux/api/blogApi/user'
import { actions } from '../../redux/slices/user.slice'
import Loading from '../Loading'

import classes from './Forms.module.scss'

export default function SignInForms() {
  const dispatch = useDispatch()
  const location = useLocation()
  const { isLogined } = useSelector((state) => state.user)

  const { from } = location.state || { from: { pathname: '/' } }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const history = useHistory()

  const [loginUser, { error, data, isLoading }] = useLoginUserMutation()

  const onSubmit = (user) => {
    loginUser({ user: { ...user } })
  }

  useEffect(() => {
    if (data) {
      const { token } = data.user
      localStorage.setItem('token', token)
      dispatch(actions.setUser(data))
      history.push('/')
    }
  }, [error, data])

  useEffect(() => {
    if (isLogined) history.replace(from)
  }, [isLogined])

  const loginError = error ? <Error message="Login or password incorrect" /> : null

  return (
    <div className={classes.login}>
      <form className={classes.login__form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={classes.login__title}>Sign In</h3>
        {loginError}
        <label className={classes.input}>
          <div className={classes.input__label}>Email address</div>
          <input
            className={classes.input__field}
            placeholder="Email address"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Enter the correct email',
              },
            })}
          />
          {errors.email && <span className={classes.input__errorMeesage}> {errors.email.message}</span>}
        </label>
        <label className={classes.input}>
          <div className={classes.input__label}>Password</div>
          <input
            type="password"
            className={classes.input__field}
            placeholder="Password"
            {...register('password', {
              required: 'This field is required',
            })}
          />
          {errors.password && <span className={classes.input__errorMeesage}> {errors.password.message}</span>}
        </label>
        {!isLoading ? (
          <input className={classes.login__btn} type="submit" value="Login" disabled={isLoading} />
        ) : (
          <Loading />
        )}
      </form>
      <div className={classes.login__desription}>
        Don’t have an account?{' '}
        <Link className={classes.login__link} to="/sign-up">
          Sign Up
        </Link>
        .
      </div>
    </div>
  )
}
