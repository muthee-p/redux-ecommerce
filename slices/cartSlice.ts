import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addToCart: (state, action) => {
			state.push(action.payload);
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
	},

});

function roundToTwoDecimals(value) {
	return Math.round(value * 100)/100;
}

export const { addToCart, removeFromCart, adjustQuantity } = cartSlice.actions;
export default cartSlice.reducer