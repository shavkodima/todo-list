import {configureStore} from '@reduxjs/toolkit'
import sliceTodos from './sliceTodos/sliceTodos'

export const store = configureStore({
  reducer:{
    todos:sliceTodos
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch