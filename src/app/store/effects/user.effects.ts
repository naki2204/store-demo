import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { User } from "src/app/models/user.model";
import { UserService } from "src/app/service/user.service";
import * as UserActions from "src/app/store/actions/user.actions";


@Injectable()
export class UserEffects {
    
    constructor(private action$: Actions, private userService: UserService){}

    loadUser$ = createEffect(() => this.action$.pipe(
        ofType(UserActions.loadUsers),
        exhaustMap(() =>
        this.userService.getUsers().pipe(
            map((users: User[]) => UserActions.loadUsers({users}))
        ))
    ));
    addUser$ = createEffect(() => this.action$.pipe(
        ofType(UserActions.addUser),
        exhaustMap(() =>
        this.userService.getUsers().pipe(
            map((users: User[]) => UserActions.loadUsers({users}))
        ))
    ));
}