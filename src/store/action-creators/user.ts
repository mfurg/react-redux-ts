import axios from "axios"
import { Dispatch } from "react"
import { UserAction, UserActionTypes } from "../../types/user"
import api from "components/helper/api"

export const fetchUsers = (page = 1, limit = 5) => {

    const url = 'https://jsonplaceholder.typicode.com/users';
    return async (dispatch: Dispatch<UserAction>) => {
        axios.get(url, {params: {_page: page, _limit: limit}})
                .then(response => {
                    dispatch({type: UserActionTypes.FETCH_USERS, payload: response.data})
                    dispatch({type: UserActionTypes.SET_TOTAL_PAGES, payload: (Number(response.headers['x-total-count'])/limit)})
                })
                .catch(response => console.log(response.message))
    }
}

export const fetchCurrentUser = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        api.auth.me()
            .then(response => dispatch({type: UserActionTypes.FETCH_CURRENT_USER, payload: response.data}))
            .catch(response => console.log(response.message))
    }
}

export function setUsersPage (page: number): UserAction {
    return {type: UserActionTypes.FETCH_USERS_PAGE, payload: page}
}

export function setLogin (): UserAction {
    return {type: UserActionTypes.LOGIN}
}