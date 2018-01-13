//
//
// File name : router.actions.ts 
// Created by: Jerry Hsieh @ 2018-01-13
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//
import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const GO = '[router] GO';
export const BACK = '[router] BACK';
export const FORWARD = '[router] FORWARD';

export class Go implements Action {
    readonly type = GO;

    constructor(
        public payload: {
            path: any[];
            query?: Object;
            extras?: NavigationExtras
        }
    ) { }
}


export class Back implements Action {
    readonly type = BACK;

}

export class Forward implements Action {
    readonly type = FORWARD;
}


export type Actions =
    | Go
    | Back
    | Forward;
