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
