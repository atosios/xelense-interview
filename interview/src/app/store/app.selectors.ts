import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

export const getAppState = createFeatureSelector<AppState>('appState');

export const getUsers = createSelector(
    getAppState,
    (state: AppState) => state.users
);

export const getUserById = (userId: number) => createSelector(
    getAppState,
    (state: AppState) => state.users.find(user => user.id === userId)
);
