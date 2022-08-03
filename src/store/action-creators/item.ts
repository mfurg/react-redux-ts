import api from "components/helper/api";
import { Dispatch } from "react"
import { ItemAction, ItemActionTypes } from "../../types/item";

export const fetchItems = (searchQuery = '') => {
    return async (dispatch: Dispatch<ItemAction>) => {
        console.log('fetch')
        await api.items.all(searchQuery)
                .then(response => {
                    dispatch({type: ItemActionTypes.FETCH_ITEMS, payload: response.data})
                    //dispatch({type: ItemActionTypes.FETCH_TOTAL_ITEMS_PAGES, payload: (Number(response.headers['x-total-count'])/limit)})
                })
                .catch(response => console.log(response.message))
    }
}

export function setItemPage (page: number): ItemAction {
    return {type: ItemActionTypes.FETCH_ITEMS_PAGE, payload: page}
}