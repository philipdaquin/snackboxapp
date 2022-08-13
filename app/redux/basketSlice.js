import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
        // Keep the state + add the payload 
      state.items = [...state.items + action.payload]
    },
    removeFromBasket: (state, action) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export default basketSlice.reducer