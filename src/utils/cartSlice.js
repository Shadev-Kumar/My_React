import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      )
      existingItem
        ? (existingItem.quantity += 1)
        : state.items.push(action.payload)
    },
    increaseItemCount: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
    },
    decrQuantity: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      )
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})
export const {
  addItem,
  increaseItemCount,
  decrQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
