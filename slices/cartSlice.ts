import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
	initialState: [] as CartItem[],
	reducers: {
		addToCart: (state, action: PayloadAction<CartItem>) => {
			const {id, name, image, price, quantity = 1 } = action.payload;
			
			const existingItem = state.find((item) => item.id === action.payload.id);
			
			if(existingItem){
				existingItem.quantity += quantity;
				existingItem.totalPrice = roundToTwoDecimals(existingItem.price * existingItem.quantity);

			}else{
				state.push({id, name, image, price, quantity, totalPrice: price * quantity});
			}
		},

		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			return state.filter(item => item.id !== action.payload.id);
		},
		adjustQuantity: (state, action:  PayloadAction<{ id: number; quantity: number}> ) => {
			const {id, quantity } = action.payload;
			const itemToUpdate = state.find(item => item.id === id);
			if (itemToUpdate) {
				itemToUpdate.quantity = quantity;
				itemToUpdate.totalPrice = roundToTwoDecimals(itemToUpdate.price * quantity);
			}
		},
		clearCart: (state) =>{
			return [];
		}
	},

});

function roundToTwoDecimals(value: number):number {
	return Math.round(value * 100)/100;
}

export const { addToCart, removeFromCart, adjustQuantity, clearCart} = cartSlice.actions;
export default cartSlice.reducer