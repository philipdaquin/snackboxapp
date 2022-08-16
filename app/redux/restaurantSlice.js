import { createSlice } from '@reduxjs/toolkit'


const initialState = {
   restaurant: {
    id: null,
    avg_waiting: null,
    name: null,
    short_description: null,
    avg_person: null,
    ratings: null,
    total_reviews: null,
    delivery_price: null,
    address: null,
    thumbnail: null,
    profile_pic: null
  }
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurant = (state) => state.restaurant.restaurant

export default restaurantSlice.reducer 