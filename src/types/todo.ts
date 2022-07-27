export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCSESS = 'FETCH_TODOS_SUCCSESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    FETCH_TODOS_PAGE = 'FETCH_TODOS_PAGE'
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS
}
interface FetchTodoSuccsessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCSESS;
    payload: any[];
}
interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR
    payload: string;
}
interface FetchTodoPageAction {
    type: TodoActionTypes.FETCH_TODOS_PAGE
    payload: number;
}

export type TodoAction = FetchTodoAction | FetchTodoSuccsessAction | FetchTodoErrorAction | FetchTodoPageAction;