import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './store/reducers/todo.reducer';
import { usersReducer } from './store/reducers/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/effects/todo.effects';
import { UserEffects } from './store/effects/user.effects';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({todos: todosReducer, users: usersReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    EffectsModule.forRoot([TodoEffects,UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
