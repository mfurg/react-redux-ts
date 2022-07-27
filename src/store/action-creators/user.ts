import axios from "axios"
import { Dispatch } from "react"
import { UserAction, UserActionTypes } from "../../types/user"

export const fetchUsers = () => {

    const url = 'https://jsonplaceholder.typicode.com/users';
    
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            dispatch({type: UserActionTypes.FETCH_USERS})
            axios.get(url)
                .then(response => dispatch({type: UserActionTypes.FETCH_USERS_SUCCSESS, payload: response.data}))
                .catch(response => console.log(response.message))

        } catch {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'error fetching'})
        }
    }
}