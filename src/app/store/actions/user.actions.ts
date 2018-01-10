//
//
// File name : user.actions.ts
// Created by: Jerry Hsieh @ 2018-01-10
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//
import { Action } from '@ngrx/store';

import { User } from '../../models';

// define action types
export const LOGIN = '[user] LOGIN';
export const LOGIN_SUCCESS = '[user]  LOGIN_SUCCESS';
export const LOGIN_FAIL = '[user] LOGIN_FAIL';

export const LOGOUT = '[user] LOGOUT';
export const LOGOUT_SUCCESS = '[user] LOGOUT_SUCCESS';
export const LOGOUT_FAIL = '[user] LOGOUT_FAIL';

export const GETUSER = '[user] GETUSER';
export const GETUSER_SUCCESS = '[user] GETUSER_SUCCESS';
export const GETUSER_FAIL = '[user] GETUSER_FAIL';


// define Actions class
export class LoginAction implements Action {
    readonly type = LOGIN;

    constructor(public payload: User) { }
}
export class LoginSuccessAction implements Action {
    readonly type = LOGIN_SUCCESS;

    constructor(public payload: string) { }
}

export class LoginFailAction implements Action {
    readonly type = LOGIN_FAIL;
    constructor(public payload: any) { }
}

export class LogoutAction implements Action {
    readonly type = LOGOUT;
}

export class LogoutSuccessAction implements Action {
    readonly type = LOGOUT_SUCCESS;
}

export class LogoutFailAction implements Action {
    readonly type = LOGOUT_FAIL;
}


export class GetUserAction implements Action {
    readonly type = GETUSER;
}

export class GetUserSuccessAction implements Action {
    readonly type = GETUSER_SUCCESS;

    constructor(public payload: string) { }         // username
}

export class GetUserFailAction implements Action {
    readonly type = GETUSER_FAIL;

    constructor(public payload: any) { }
}

export type UserActions
    = LoginAction
    | LoginSuccessAction
    | LoginFailAction
    | LogoutAction
    | LogoutSuccessAction
    | LogoutFailAction
    | GetUserAction
    | GetUserSuccessAction
    | GetUserFailAction;
