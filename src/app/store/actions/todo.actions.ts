import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/models/todo.model";

export const loadTodos = createAction(
    '[Todos] Load Todos',
    props<{todos: Todo[]}>()
)


export const addTodo = createAction(
    '[Todos] Add todo',
    props<{todo: Todo}>()
)

export const toggleTodo = createAction(
    '[Todos] Toggle todo',
    props<{id: string}>()
)

export const removeTodo = createAction(
    '[Todos] Remove todo',
    props<{id: string}>()
)