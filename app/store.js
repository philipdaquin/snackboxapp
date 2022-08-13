import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './redux/basketSlice'

const store = configureStore({
  reducer: {
    basket: basketReducer
  },
})

export default store