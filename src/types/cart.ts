export interface CartState {
    cart: any[];
}

export enum CartActionTypes {
    ADD = 'ADD',
    REMOVE = 'REMOVE'
}

interface AddAction {
    type: CartActionTypes.ADD;
    payload: any;
}
interface RemoveAction {
    type: CartActionTypes.REMOVE;
    payload: any;
}

export type CartAction = AddAction | RemoveAction;