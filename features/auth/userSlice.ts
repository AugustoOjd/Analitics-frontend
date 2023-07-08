import { IUser } from '@/interface/IUser'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface AuthState {
    user: IUser | null
    login: boolean
  }
  
  const initialState: AuthState = {
    user: null,
    login: false
  }

  export const authSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        login: (state, action)=>{
            state.login = true
            state.user = action.payload
        },
        logout: (state)=>{
            state.login = false
            state.user = null
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { login, logout } = authSlice.actions
  
  export default authSlice.reducer