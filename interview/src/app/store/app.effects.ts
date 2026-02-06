import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { loadUserDetails, loadUserDetailsFailure, loadUserDetailsSuccess, loadUsers, loadUsersFailure, loadUsersSuccess } from "./app.actions";
import { UsersService } from "../services/users.service";

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private userService: UsersService
    ) { }

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadUsers),
            mergeMap(() =>
                this.userService.getUsers().pipe(
                    map(users => loadUsersSuccess({ users })),
                    catchError(error => of(loadUsersFailure({ error })))
                )
            )
        )
    );

    loadUserDetails$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadUserDetails),
            mergeMap(action =>
                this.userService.getUserDetails(action.userId).pipe(
                    map(user => loadUserDetailsSuccess({ user })),
                    catchError(error => of(loadUserDetailsFailure({ error })))
                )
            )
        )
    );

}