import { IUser } from '@/interface/IUser'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface AuthState {
    user: IUser | null
    login: boolean
    isCheking: boolean
  }
  
  const initialState: AuthState = {
    user: null,
    login: false,
    isCheking: true
  }

  export const authSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        login: (state, action)=>{
          state.user = action.payload
          if(state.user) state.login = true
        },
        logout: (state)=>{
            state.login = false
            state.user = null
        },
        checkingAuth:(state, action)=>{
      
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { login, logout } = authSlice.actions
  
  export default authSlice.reducer