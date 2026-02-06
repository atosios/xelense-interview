import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { User } from '../models/user.mode';
import { loadUserDetailsSuccess, loadUsersSuccess } from './app.actions';

export interface AppState {
    users: User[];
}

export const initialState: AppState = {
    users: []
};

export const appReducer = createReducer(
    initialState,
    on(loadUsersSuccess, (state, { users }) => ({
        ...state,
        users: [...users]
    })),
    on(loadUserDetailsSuccess, (state, { user }) => ({
        ...state,
        users: user ? [...state.users, user] : state.users
    }))
);
