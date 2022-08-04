export interface UserState {
    users: any[],
    user: any,
    page: number,
    limit: number,
    totalPages: number,
    isLogged: boolean,
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_CURRENT_USER = 'FETCH_CURRENT_USER',
    FETCH_USERS_PAGE = 'FETCH_USERS_PAGE',
    SET_TOTAL_PAGES = 'SET_TOTAL_PAGES',
    LOGIN = 'LOGIN',
    CLEAR = 'CLEAR',
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS,
    payload: any[],
}
interface FetchCurrentUserAction {
    type: UserActionTypes.FETCH_CURRENT_USER,
    payload: any,
}
interface FetchUserPageAction {
    type: UserActionTypes.FETCH_USERS_PAGE
    payload: number;
}
interface SetTotalPagesAction {
    type: UserActionTypes.SET_TOTAL_PAGES
    payload: number;
}
interface SetLogin {
    type: UserActionTypes.LOGIN
}
interface ClearUser {
    type: UserActionTypes.CLEAR
}

export type UserAction = FetchUserAction | FetchCurrentUserAction | FetchUserPageAction | SetTotalPagesAction | SetLogin | ClearUser;

