import { UserState, UserAction, UserActionTypes } from "../../types/user"

const token = localStorage.getItem('token');

const initialState: UserState = {
    users: [],
    user: {},
    page: 1,
    limit: 5,
    totalPages: 1,
    isLogged: token ? true : false,
}

export const userReducer = (state = initialState, action:UserAction): UserState => {
    switch (action.type){
        case UserActionTypes.FETCH_USERS:
            return {...state, users: action.payload}
        case UserActionTypes.FETCH_CURRENT_USER:
            return {...state, user: action.payload}
        case UserActionTypes.FETCH_USERS_PAGE:
            return {...state, page: action.payload}
        case UserActionTypes.SET_TOTAL_PAGES:
            return {...state, totalPages: action.payload}
        case UserActionTypes.LOGIN:
            return {...state, isLogged: !state.isLogged}
        case UserActionTypes.CLEAR:
            return {...state, user: {}}
        default:
            return state;
    }
}