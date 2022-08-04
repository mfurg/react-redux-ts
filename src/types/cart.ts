export interface CartState {
    cart: any[];
}

export enum CartActionTypes {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    QUANTITY = 'QUANTITY',
    CLEAR = 'CLEAR'
}

interface AddAction {
    type: CartActionTypes.ADD;
    payload: any;
}
interface RemoveAction {
    type: CartActionTypes.REMOVE;
    payload: any;
}
interface QuantityAction {
    type: CartActionTypes.QUANTITY;
    payload: any;
}
interface ClearAction {
    type: CartActionTypes.CLEAR;
}

export type CartAction = AddAction | RemoveAction | QuantityAction | ClearAction;