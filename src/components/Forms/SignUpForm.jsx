import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import classes from './Forms.module.scss'

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch('example')) // watch input value by passing the name of it

  return (
    <div className={classes.login}>
      <form className={classes.login__form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={classes.login__title}>Create new account</h3>
        <label className={classes.input}>
          <div className={classes.input__label}>Username</div>
          <input className={classes.input__field} placeholder="username" {...register('example')} />
        </label>
        <label className={classes.input}>
          <div className={classes.input__label}>Email address</div>
          <input className={classes.input__field} placeholder="Email address" {...register('example')} />
        </label>
        <label className={classes.input}>
          <div className={classes.input__label}>Password</div>
          <input
            className={classes.input__field}
            placeholder="Password"
            {...register('exampleRequired', { required: true })}
          />
        </label>
        <label className={classes.input}>
          <div className={classes.input__label}>Repeat Password</div>
          <input
            className={classes.input__field}
            placeholder="Password"
            {...register('exampleRequired', { required: true })}
          />
        </label>
        <label className={`${classes.input} ${classes.privacy}`}>
          <input className={classes.privacy__checkbox} type="checkbox" />
          <span className={classes.privacy__text}>I agree to the processing of my personal information</span>
        </label>
        {errors.exampleRequired && <span>This field is required</span>}

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
