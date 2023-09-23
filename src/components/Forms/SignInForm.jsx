import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../../redux/user/user.slice'
import Error from '../Error'

import classes from './Forms.module.scss'

export default function SignInForms() {
  const dispatch = useDispatch()
  const { error } = useSelector((state) => state.user)
  // const history = useHistory()
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const { email, password } = data
    dispatch(login(email, password))
  }

  const loginError = error !== '' ? <Error message="Login or password incorrect" /> : null

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
        <input className={classes.login__btn} type="submit" value="Login" />
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
