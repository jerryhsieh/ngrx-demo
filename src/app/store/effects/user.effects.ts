//
//
// File name : user.effects.ts
// Created by: Jerry Hsieh @ 2018-01-11
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, switchMap, filter, catchError } from 'rxjs/operators';

import { UserService } from '../../users/service/user.service';
import { UtilsService } from '../../helper/utils.service';
import { User, Response } from '../../models';
import * as actions from '../actions';

@Injectable()
export class UserEffects {
    constructor(
        private action$: Actions,
        private userService: UserService,
        private utils: UtilsService
    ) { }


    @Effect()
    loginEffect$: Observable<Action> = this.action$.ofType(actions.LOGIN).pipe(
        map((action: actions.LoginAction) => action.payload),
        switchMap((user: User) => {
            return this.userService.loginToServer(user).pipe(
                map((res: Response) => {
                    if (res.success) {
                        if (user.rememberMe) {
                            this.utils.writeToken(res.payload);
                        }
                        return new actions.LoginSuccessAction(user.username);
                    } else {
                        return new actions.LoginFailAction(res.payload);
                    }

                }),
                catchError((err) => of(new actions.LoginFailAction(err))),
            )
        }),
    );

    @Effect()
    logoutEffect$: Observable<Action> = this.action$.ofType(actions.LOGOUT).pipe(
        map(() => {
            this.utils.removeToken();
            return (new actions.LogoutSuccessAction());
        })
    )

    @Effect()
    getUserEffect$: Observable<Action> = this.action$.ofType(actions.GETUSER).pipe(
        switchMap(() => {
            return this.userService.getUserFromServer().pipe(
                filter(user => (user !== null)),
                map((user: User) => new actions.GetUserSuccessAction(user.username)),
                catchError(err => of(new actions.GetUserFailAction(err))),
            )
        })
    )



}


