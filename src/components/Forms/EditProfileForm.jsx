/* eslint-disable no-restricted-syntax */
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { changeProfile } from '../../redux/user/user.slice'

import classes from './Forms.module.scss'

export default function EditProfileForm() {
  const { error, user, isLogined } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const history = useHistory()

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    // const { username, email, password, image } = data
    dispatch(changeProfile(data.username, data.email, data.password, data.image))
  }
  useEffect(() => {
    if (user !== '') {
      setValue('username', user.username)
      setValue('email', user.email)
      setValue('image', user.image)
    }
  }, [user])

  useEffect(() => {
    if (!isLogined) history.push('/sign-in')
  }, [isLogined])

  useEffect(() => {
    if (error !== '') {
      for (const [key, value] of Object.entries(error.errors)) {
        setError(key, { type: 'custom', message: `${key} ${value}` })
      }
    }
  }, [error])

  return (
    <div className={classes.login}>
      <form className={classes.login__form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={classes.login__title}>Edit Profile</h3>
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
          <div className={classes.input__label}>New password</div>
          <input
            className={`${classes.input__field} ${errors.password ? classes.input__error : ''}`}
            placeholder="Password"
            type="password"
            {...register('password', {
              // required: 'This field is required',
              minLength: { value: 6, message: 'Length must be from 6 to 40 characters' },
              maxLength: { value: 40, message: 'Length must be from 6 to 40 characters' },
            })}
          />
          {errors.password && <span className={classes.input__errorMeesage}> {errors.password.message}</span>}
        </label>
        <label className={classes.input}>
          <div className={classes.input__label}>Avatar image (url)</div>
          <input
            className={`${classes.input__field} ${errors.image ? classes.input__error : ''}`}
            placeholder="Avatar image"
            {...register('image', {
              pattern: {
                value:
                  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g,
                message: 'Enter the correct url',
              },
            })}
          />
          {errors.image && <span className={classes.input__errorMeesage}> {errors.image.message}</span>}
        </label>

        <input className={classes.login__btn} type="submit" value="Save" />
      </form>
    </div>
  )
}
