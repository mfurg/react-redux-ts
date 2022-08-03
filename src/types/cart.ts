export interface CartState {
    cart: any[];
}

export enum CartActionTypes {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    QUANTITY = 'QUANTITY'
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

export type CartAction = AddAction | RemoveAction | QuantityAction;