import { combineReducers } from "redux";
import { itemReducer } from "./itemReducer";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    item: itemReducer,
    cart: cartReducer
})
export type RootState = ReturnType<typeof rootReducer>