export interface ItemState {
    items: any[];
    page: number;
    limit: number;
    totalPages: number;
}

export enum ItemActionTypes {
    FETCH_ITEMS = 'FETCH_ITEMS',
    FETCH_ITEMS_PAGE = 'FETCH_ITEMS_PAGE',
    FETCH_TOTAL_ITEMS_PAGES = 'FETCH_TOTAL_ITEMS_PAGES'
}

interface FetchItemAction {
    type: ItemActionTypes.FETCH_ITEMS;
    payload: any[];
}
interface FetchItemPageAction {
    type: ItemActionTypes.FETCH_ITEMS_PAGE;
    payload: number;
}
interface FetchTotalItemPagesAction {
    type: ItemActionTypes.FETCH_TOTAL_ITEMS_PAGES;
    payload: number;
}

export type ItemAction = FetchItemAction |  FetchItemPageAction | FetchTotalItemPagesAction;