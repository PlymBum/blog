import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useRegisterUserMutation } from '../../redux/api/blogApi/user'
import { actions } from '../../redux/slices/user.slice'

import classes from './Forms.module.scss'

export default function SignUpForm() {
  const history = useHistory()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm()
  const pwd = watch('password')

  const [registUser, { error, data }] = useRegisterUserMutation()

  const onSubmit = (user) => {
    registUser({ user: { ...user } })
  }

  useEffect(() => {
    if (error) {
      for (const [key, value] of Object.entries(error.data.errors)) {
        setError(key, { type: 'custom', message: `${key} ${value}` })
      }
    }
    if (data) {
      const { token } = data.user
      localStorage.setItem('token', token)
      dispatch(actions.setUser(data))
      history.push('/')
    }
  }, [error, data])

  return (
    <div className={classes.login}>
      <form className={classes.login__form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={classes.login__title}>Create new account</h3>
        <label className={classes.input}>
          <div className={classes.input__label}>Username</div>
          <input
            className={`${classes.input__field} ${errors.username ? classes.input__error : ''}`}
            placeholder="username"
            {...register('username', {
              required: 'This field is required',
              minLength: { value: 3, message: 'Length must be from 3 to 20 characters' },
              maxLength: { value: 20, message: 'Length must be from 3 to 20 characters' },
            })}
          />
          {errors.username && <span className={classes.input__errorMeesage}> {errors.username.message}</span>}
        </label>
        <label className={classes.input}>
          <div className={classes.input__label}>Email address</div>
          <input
            className={`${classes.input__field} ${errors.email ? classes.input__error : ''}`}
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
            className={`${classes.input__field} ${errors.password ? classes.input__error : ''}`}
            placeholder="Password"
            type="password"
            {...register('password', {
              required: 'This field is required',
              minLength: { value: 6, message: 'Length must be from 6 to 40 characters' },
              maxLength: { value: 40, message: 'Length must be from 6 to 40 characters' },
            })}
          />
          {errors.password && <span className={classes.input__errorMeesage}> {errors.password.message}</span>}
        </label>
        <label className={classes.input}>
          <div className={classes.input__label}>Repeat Password</div>
          <input
            className={`${classes.input__field} ${errors.repeatPassword ? classes.input__error : ''}`}
            placeholder="Password"
            type="password"
            {...register('repeatPassword', {
              required: 'This field is required',
              validate: {
                matchPass: (value) => value === pwd || 'The passwords do not match',
              },
            })}
          />
          {errors.repeatPassword && (
            <span className={classes.input__errorMeesage}> {errors.repeatPassword.message}</span>
          )}
        </label>
        <label className={`${classes.input} ${classes.privacy}`}>
          <input
            className={classes.privacy__checkbox}
            type="checkbox"
            {...register('agree', { required: 'you must accept the agreement to register' })}
          />
          <span className={classes.privacy__text}>I agree to the processing of my personal information</span>
        </label>
        {errors.agree && <span className={classes.input__errorMeesage}> {errors.agree.message}</span>}

        <input className={classes.login__btn} type="submit" value="Login" />
      </form>
      <div className={classes.login__desription}>
        Already have an account?{' '}
        <Link className={classes.login__link} to="/sign-in">
          Sign In
        </Link>
        .
      </div>
    </div>
  )
}
