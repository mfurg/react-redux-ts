export interface CartItem {
    id: number;
    name: string;
    description: string;
    price: string;
    quantity: number;
}

export interface OrderInterface {
    "amount": number;
    "items": CartItem[];
}

export interface CartState {
    cart: CartItem[];
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