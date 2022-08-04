import api from "components/helper/api";
import { Dispatch } from "react"
import { CartActionTypes, CartAction } from "types/cart";


export function addItem (item: any): CartAction {
    return {type: CartActionTypes.ADD, payload: item}
}

export function removeItem (id: number): CartAction {
    return {type: CartActionTypes.REMOVE, payload: id}
}

export function addQuantity (id: number, quantity: number): CartAction {
    return {type: CartActionTypes.QUANTITY, payload: {id, quantity}}
}

export function clearCart (): CartAction {
    return {type: CartActionTypes.CLEAR}
}