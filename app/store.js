import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './redux/basketSlice'
import restaurantReducer from './redux/restaurantSlice'
const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer
  },
})

export default store