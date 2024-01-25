import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = 'http://localhost:3000/todos'

  constructor(private httpClient: HttpClient) { }

  getTodos() :Observable<Todo[]>{
    return this.httpClient.get(this.url) as Observable<Todo[]>
  }

  createTodos(todo: Todo[]) :Observable<Todo[]>{
    return this.httpClient.post(this.url, todo) as Observable<Todo[]>
  }
}
