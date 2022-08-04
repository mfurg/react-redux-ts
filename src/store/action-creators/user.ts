import { Dispatch } from "react"
import { UserAction, UserActionTypes } from "../../types/user"
import api from "components/helper/api"

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        await api.users.all()
            .then(response => {
                dispatch({type: UserActionTypes.FETCH_USERS, payload: response.data})
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

export function clearUser (): UserAction {
    return {type: UserActionTypes.CLEAR}
}