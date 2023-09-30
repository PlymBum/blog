import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isLogined: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, actions) => {
      return { user: { ...actions.payload.user }, isLogined: true }
    },
    clearUser: (state) => {
      return { ...state, isLogined: false, user: null }
    },
    updateUser: (state, actions) => {
      return { user: { ...actions.payload.user }, isLogined: true }
    },
  },
})

export const { actions, reducer } = userSlice

// export const login = (email, password) => async (dispatch) => {
//   dispatch(actions.setLoading(true))
//   apiBlog
//     .userLogin(email, password)
//     .then((u) => {
//       dispatch(actions.setUser(u))
//       localStorage.setItem('token', u.user.token)
//     })
//     .catch((e) => {
//       dispatch(actions.setError(e.cause))
//     })
//   dispatch(actions.setLoading(false))
// }

// export const signUp = (username, email, password) => async (dispatch) => {
//   dispatch(actions.setLoading(true))

//   apiBlog
//     .registerUser(username, email, password)
//     .then((u) => {
//       dispatch(actions.setUser(u))
//       localStorage.setItem('token', u.user.token)
//     })
//     .catch((e) => {
//       dispatch(actions.setError(e.cause))
//     })

//   dispatch(actions.setLoading(false))
// }

// export const checkAuth = () => async (dispatch) => {
//   const token = localStorage.getItem('token')
//   if (!token) return
//   apiBlog.getUserInfo(token).then((u) => {
//     dispatch(actions.setUser(u))
//     localStorage.setItem('token', u.user.token)
//   })
// }
// export const changeProfile = (username, email, password, image) => async (dispatch) => {
//   const token = localStorage.getItem('token')
//   if (!token) return
//   apiBlog
//     .updateUser(token, username, email, password, image)
//     .then((u) => {
//       dispatch(actions.setUser(u))
//     })
//     .catch((e) => {
//       dispatch(actions.setError(e.cause))
//     })
// }
