import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { Todo } from "src/app/models/todo.model";
import { TodoService } from "src/app/service/todo.service";
import * as TodoActions from "src/app/store/actions/todo.actions";


@Injectable()
export class TodoEffects {
    
    constructor(private action$: Actions, private todoService: TodoService){}

    loadTodo$ = createEffect(() => this.action$.pipe(
        ofType(TodoActions.loadTodos),
        exhaustMap(() =>
        this.todoService.getTodos().pipe(
            map((todos: Todo[]) => TodoActions.loadTodos({todos}))
        ))
    ));
    addTodo$ = createEffect(() => this.action$.pipe(
        ofType(TodoActions.addTodo),
        exhaustMap(() =>
        this.todoService.getTodos().pipe(
            map((todos: Todo[]) => TodoActions.loadTodos({todos}))
        ))
    ));
}