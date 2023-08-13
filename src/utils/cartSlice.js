import { createSlice } from '@reduxjs/toolkit'

const storedcartitems = JSON.parse(localStorage.getItem('cartItems'))

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: storedcartitems || [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      )
      existingItem
        ? (existingItem.quantity += 1)
        : state.items.push(action.payload)

      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    increaseItemCount: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    decrQuantity: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      )
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    clearCart: (state) => {
      state.items = []
      localStorage.removeItem('cartItems')
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
