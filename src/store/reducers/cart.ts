import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CartState = {
  items: Produto[]
  favorites: Produto[]
}

const initialState: CartState = {
  items: [],
  favorites: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
      const product = action.payload
      if (state.items.find((p) => p.id === product.id)) {
        alert('Item já adicionado')
      } else {
        state.items.push(product)
      }
    },
    favorite: (state, action: PayloadAction<Produto>) => {
      const favorite = action.payload
      if (state.favorites.find((p) => p.id === favorite.id)) {
        state.favorites = state.favorites.filter((p) => p.id !== favorite.id)
      } else {
        state.favorites.push(favorite)
      }
    }
  }
})

export const { add, favorite } = cartSlice.actions
export default cartSlice.reducer
