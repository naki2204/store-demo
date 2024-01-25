import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const loadUsers = createAction(
    '[Users] Load Users',
    props<{users: User[]}>()
)


export const addUser = createAction(
    '[Users] Add user',
    props<{user: User}>()
)

// export const toggleUser = createAction(
//     '[Users] Toggle user',
//     props<{id: string}>()
// )

export const removeUser = createAction(
    '[Users] Remove user',
    props<{id: string}>()
)