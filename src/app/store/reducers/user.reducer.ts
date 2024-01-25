import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user.model";
import { removeUser, addUser, loadUsers } from "../actions/user.actions";


export interface UserState {
    users: User[]
}

export const initUserState: UserState = {
    users: []
}

export const usersReducer = createReducer(
    initUserState,
    on(loadUsers, (state,{users}) =>({...state, users})),
    on(addUser, (state, {user}) =>({
        ...state,
        users: [...state.users,user]
    })),
    on(removeUser, (state, {id}) => ({
        ...state,
        users: state.users.filter((user) => user.id !== id),
    })),
)
    