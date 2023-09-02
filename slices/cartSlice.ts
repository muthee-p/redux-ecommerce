import { createSlice } from '@reduxjs/toolkit'

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
addToCart: (state, action) => {
  const { id, name, image, price, quantity = 1 } = action.payload;

  // Check if the item already exists in the cart
  if (state.hasOwnProperty(id)) {
    // Item already exists, update its quantity and total price
    state[id].quantity += quantity;
    state[id].totalPrice = roundToTwoDecimals(state[id].price * state[id].quantity);
  } else {
    // Item doesn't exist, create a new entry
    state[id] = {
      id,
      name,
      image,
      price,
      quantity,
      totalPrice: roundToTwoDecimals(price * quantity),
    };
  }
},

		removeFromCart: (state, action) => {
			return state.filter(item => item.id !== action.payload.id);
		},
		adjustQuantity: (state, action) => {
			const {id, quantity } = action.payload;
			const itemToUpdate = state.find(item => item.id === id);
			if (itemToUpdate) {
				itemToUpdate.quantity = quantity;
				itemToUpdate.totalPrice = roundToTwoDecimals(itemToUpdate.price * quantity);
			}
		},
		finalCartInfo: (state, action) => {
			state.totalCost = action.payload.totalCost;
			state.couponCode = action.payload.couponCode;
			state.shippingOption = action.payload.shippingOption;
		},
		clearCart: state =>{
			return [];
		}
	},

});

function roundToTwoDecimals(value) {
	return Math.round(value * 100)/100;
}

export const { addToCart, removeFromCart, adjustQuantity, finalCartInfo, clearCart} = cartSlice.actions;
export default cartSlice.reducer