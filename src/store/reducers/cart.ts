import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CartState = {
  items: Produto[]
}

const initialState: CartState = {
  items: []
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
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer

// function adicionarAoCarrinho(produto: Produto) {
//   if (carrinho.find((p) => p.id === produto.id)) {
//     alert('Item já adicionado')
//   } else {
//     setCarrinho([...carrinho, produto])
//   }
// }
