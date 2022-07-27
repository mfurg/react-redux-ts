import axios from "axios"
import { Dispatch } from "react"
import { TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {

    const url = 'https://jsonplaceholder.typicode.com/todos';
    
    return async (dispatch: Dispatch<TodoAction>) => {
        try{
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            axios.get(url, {params: {_page: page, _limit: limit}})
                .then(response => dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCSESS, payload: response.data}))
                .catch(response => console.log(response.message))

        } catch {
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'error fetching'})
        }
    }
}

export function setTodoPage (page: number): TodoAction {
    return {type: TodoActionTypes.FETCH_TODOS_PAGE, payload: page}
}