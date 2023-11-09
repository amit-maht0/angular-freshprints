import { createAction, props } from '@ngrx/store';
import { Users } from '../models/user.model';

export const addUser = createAction('ADD_USER', props<Users>());

export const removeSingleUser = createAction('REMOVE_USER', props<any>());
