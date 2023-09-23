import { createSlice } from '@reduxjs/toolkit'

import ApiBlog from '../../apiBlog/ApiBlog'

const apiBlog = new ApiBlog()
const initialState = {
  user: null,
  error: '',
  isLogined: false,
  isLoading: true,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, actions) => {
      return { user: { ...actions.payload.user }, error: '', isLogined: true }
    },
    setError: (state, actions) => {
      return { ...state, error: actions.payload }
    },
    setLoading: (state, actions) => {
      return { ...state, error: '', isLogined: false, isLoading: actions.payload.loading }
    },
    setAuth: (state, actions) => {
      return { ...state, error: '', isLogined: actions.payload.auth }
    },
    clearUser: (state) => {
      return { ...state, isLogined: false, user: null }
    },
    updateUser: (state, actions) => {
      return { user: { ...actions.payload.user }, error: '', isLogined: true }
    },
  },
})

export const { actions, reducer } = userSlice

export const login = (email, password) => async (dispatch) => {
  dispatch(actions.setLoading(true))
  apiBlog
    .userLogin(email, password)
    .then((u) => {
      dispatch(actions.setUser(u))
      localStorage.setItem('token', u.user.token)
    })
    .catch((e) => {
      dispatch(actions.setError(e.cause))
    })
  dispatch(actions.setLoading(false))
}

export const signUp = (username, email, password) => async (dispatch) => {
  dispatch(actions.setLoading(true))

  apiBlog
    .registerUser(username, email, password)
    .then((u) => {
      dispatch(actions.setUser(u))
      localStorage.setItem('token', u.user.token)
    })
    .catch((e) => {
      dispatch(actions.setError(e.cause))
    })

  dispatch(actions.setLoading(false))
}

export const checkAuth = () => async (dispatch) => {
  const token = localStorage.getItem('token')
  if (!token) return
  apiBlog.getUserInfo(token).then((u) => {
    dispatch(actions.setUser(u))
    localStorage.setItem('token', u.user.token)
  })
}
export const changeProfile = (username, email, password, image) => async (dispatch) => {
  const token = localStorage.getItem('token')
  if (!token) return
  apiBlog
    .updateUser(token, username, email, password, image)
    .then((u) => {
      dispatch(actions.setUser(u))
    })
    .catch((e) => {
      dispatch(actions.setError(e.cause))
    })
}
