import api from "components/helper/api";
import { Dispatch } from "react"
import { ItemAction, ItemActionTypes } from "../../types/item";

export const fetchItems = (searchQuery = '', page = 1, limit = 5) => {

    const offset = ( page-1 ) * limit;

    return async (dispatch: Dispatch<ItemAction>) => {
        
        await api.items.all(searchQuery, offset, limit)
                .then(response => {
                    dispatch({type: ItemActionTypes.FETCH_ITEMS, payload: response.data.items})
                    dispatch({type: ItemActionTypes.FETCH_TOTAL_ITEMS_PAGES, payload: (Math.ceil(Number(response.data.count)/limit))})
                })
                .catch(response => console.log(response.message))
    }
}

export function setItemPage (page: number): ItemAction {
    return {type: ItemActionTypes.FETCH_ITEMS_PAGE, payload: page}
}

export function setLimit (limit: number): ItemAction {
    return {type: ItemActionTypes.SET_LIMIT, payload: limit}
}

export function setLoading (loaded: boolean): ItemAction {
    return {type: ItemActionTypes.SET_LOADING, payload: loaded}
}