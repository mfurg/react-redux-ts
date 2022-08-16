export interface ItemInterface {
    name: string;
    description: string;
    price: string;
}

export interface ItemState {
    items: ItemInterface[];
    page: number;
    limit: number;
    totalPages: number;
    loading: boolean;
}

export enum ItemActionTypes {
    FETCH_ITEMS = 'FETCH_ITEMS',
    FETCH_ITEMS_PAGE = 'FETCH_ITEMS_PAGE',
    FETCH_TOTAL_ITEMS_PAGES = 'FETCH_TOTAL_ITEMS_PAGES',
    SET_LIMIT = 'SET_LIMIT',
    SET_LOADING = 'SET_LOADING'
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
interface SetLimitItemsAction {
    type: ItemActionTypes.SET_LIMIT;
    payload: number;
}
interface SetLoadingAction {
    type: ItemActionTypes.SET_LOADING;
    payload: boolean;
}

export type ItemAction = FetchItemAction |  FetchItemPageAction | FetchTotalItemPagesAction | SetLimitItemsAction | SetLoadingAction;