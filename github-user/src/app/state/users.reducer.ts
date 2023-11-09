// import { createReducer, on } from '@ngrx/store';
// import * as UserActions from './users.actions';
// import { Users } from '../models/user.model';

// export interface UserState {
//   user: Users[];
//   error: string | null;
//   status: 'pending' | 'loading' | 'error' | 'success';
// }

// export const initialState: UserState = {
//   user: [],
//   error: null,
//   status: 'pending',
// };

// export const userReducer = createReducer(
//   initialState,

//   on(UserActions.addUser, (state, { data }) => ({
//     ...state,
//     user: [...state.user, { id: data.id }],
//   }))
// );
