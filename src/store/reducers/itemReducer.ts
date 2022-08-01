import { ItemAction, ItemActionTypes, ItemState } from "../../types/item"

const initialState: ItemState = {
    items: [],
    page: 1,
    limit: 10,
    totalPages: 1
}

export const itemReducer = (state = initialState, action: ItemAction): ItemState => {
    switch (action.type) {
        case ItemActionTypes.FETCH_ITEMS:
            return {...state, items: action.payload}
        case ItemActionTypes.FETCH_ITEMS_PAGE:
            return {...state, page: action.payload}
        case ItemActionTypes.FETCH_TOTAL_ITEMS_PAGES:
            return {...state, totalPages: action.payload}
        default:
            return state
    }

}