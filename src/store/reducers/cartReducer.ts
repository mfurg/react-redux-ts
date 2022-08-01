import { CartAction, CartActionTypes, CartState } from "types/cart"

const initialState: CartState = {
    cart: [],
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case CartActionTypes.ADD:
            return {...state, cart: [...state.cart, {...action.payload, quantity: 1}]}
        case CartActionTypes.REMOVE:
            return {...state, cart: state.cart.filter(c => c.id !== action.payload)};
        default:
            return state
    }

}