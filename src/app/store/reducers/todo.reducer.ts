import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/models/todo.model";
import { removeTodo, addTodo, toggleTodo, loadTodos } from "../actions/todo.actions";


export interface TodoState {
    todos: Todo[]
}

export const initTodoState: TodoState = {
    todos: []
}

export const todosReducer = createReducer(
    initTodoState,
    on(loadTodos, (state,{todos}) =>({...state, todos})),
    on(addTodo, (state, {todo}) =>({
        ...state,
        todos: [...state.todos,todo]
    })),
    on(removeTodo, (state, {id}) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
    })),
    on(toggleTodo, (state, {id}) => ({
        ...state,
        todos: state.todos.map((todo) => todo.id === id ? {...todo,completed: !todo.completed} : todo),
    }))
)
    