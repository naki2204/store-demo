import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import { User } from 'src/app/models/user.model';
import { addTodo, loadTodos, removeTodo, toggleTodo } from 'src/app/store/actions/todo.actions';
import { loadUsers } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$!: Todo[];
  users$!: User[];

  constructor(private store: Store<{todos: {todos : Todo[]}}>,private storeUser: Store<{users: {users : User[]}}> ){
    store.select('todos').subscribe((todosState: {todos: Todo[]}) =>{
      this.todos$ = todosState.todos
      console.log(this.todos$,todosState);
      
    });
    storeUser.select('users').subscribe((usersState: {users: User[]}) =>{
      this.users$ = usersState.users
      console.log('users',this.users$,usersState);
      
    })
  }

  ngOnInit(): void {
      this.store.dispatch(loadTodos({todos: this.todos$}))
      this.storeUser.dispatch(loadUsers({users: this.users$}))
  }

  newTodoTitle = ''
  addTodo(){

    if(this.newTodoTitle.trim() === '') {
      return;
    }

    const todo :Todo = {
      id: Date.now().toString(),
      title: this.newTodoTitle,
      completed: false,
      userId: 1,
    }

    this.store.dispatch(addTodo({todo}));
    this.newTodoTitle =''
  }

  toggleTodo(id :string){
    this.store.dispatch(toggleTodo({id}));
  }

  removeTodo(id :string){
    this.store.dispatch(removeTodo({id}));
  }
}
