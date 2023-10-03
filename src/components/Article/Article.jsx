/* eslint-disable no-restricted-syntax */
import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { withRouter } from 'react-router'

import Loading from '../Loading'

import classes from './Article.module.scss'

function Article({ onSubmit, data, isLoading }) {
  let defaultValues = {
    tagList: ['\n'],
  }
  if (data) {
    const { title, description, body, tagList } = data
    defaultValues = { title, description, body, tagList }
  }
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tagList',
  })

  return (
    <div className={classes.article}>
      <form className={classes.article__form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={classes.article__title}>Create new article</h3>
        <label className={classes.input}>
          <div className={classes.input__label}>Title</div>
          <input
            className={`${classes.input__field} ${errors.title ? classes.input__error : ''}`}
            placeholder="Title"
            {...register('title', {
              required: 'This field is required',
            })}
          />
          {errors.title && <span className={classes.input__errorMeesage}> {errors.title.message}</span>}
        </label>
        <label className={classes.input}>
          <div className={classes.input__label}>Short description</div>
          <input
            className={`${classes.input__field} ${errors.description ? classes.input__error : ''}`}
            placeholder="Description"
            {...register('description', {
              required: 'This field is required',
            })}
          />
          {errors.description && <span className={classes.input__errorMeesage}> {errors.description.message}</span>}
        </label>
        <label className={classes.input}>
          <div className={classes.input__label}>Text</div>
          <textarea
            className={`${classes.input__field} ${classes.input__textarea} ${errors.text ? classes.input__error : ''}`}
            placeholder="Text"
            {...register('body', {
              required: 'This field is required',
            })}
          />
          {errors.body && <span className={classes.input__errorMeesage}> {errors.body.message}</span>}
        </label>
        <label className={classes.input}>
          <div className={classes.input__label}>Tags</div>
          <div className={classes.tags}>
            <span>
              {fields.map((item, index) => {
                return (
                  <div key={item.id}>
                    <input className={classes.input__tag} {...register(`tagList.${index}`, { required: true })} />
                    <span>
                      <button
                        className={`${classes.article__btn} ${classes.article__btn_delete}`}
                        type="button"
                        onClick={() => remove(index)}
                      >
                        Delete
                      </button>
                    </span>
                  </div>
                )
              })}
            </span>
            <button
              className={`${classes.article__btn} ${classes.article__btn_add}`}
              type="button"
              onClick={() => {
                append('')
              }}
            >
              Add tag
            </button>
          </div>
        </label>
        {!isLoading ? (
          <input className={classes.article__btn} type="submit" value="Save" disabled={isLoading} />
        ) : (
          <Loading />
        )}
      </form>
    </div>
  )
}
export default withRouter(Article)
