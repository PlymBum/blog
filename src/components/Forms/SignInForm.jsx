import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import classes from './Forms.module.scss'

export default function SignInForms() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch('email')) // watch input value by passing the name of it
  console.log(errors) // watch input value by passing the name of it

  return (
    <div className={classes.login}>
      <form className={classes.login__form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={classes.login__title}>Sign In</h3>
        <label className={classes.input}>
          <div className={classes.input__label}>Email address</div>
          <input
            className={classes.input__field}
            placeholder="Email address"
            type="email"
            {...register('email', {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.password && <span>This field is required</span>}
        </label>
        <label className={classes.input}>
          <div className={classes.input__label}>Password</div>
          <input
            type="password"
            className={classes.input__field}
            placeholder="Password"
            {...register('password', {
              required: true,
              minLength: 6,
              maxLength: 40,
              // pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.password && <span>This field is required</span>}
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
