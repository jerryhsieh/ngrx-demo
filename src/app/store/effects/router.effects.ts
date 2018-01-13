//
//
// File name : router.effects.ts 
// Created by: Jerry Hsieh @ 2018-01-13
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//


import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import * as actions from '../actions';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class RouterEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location
    ) { }

    @Effect({ dispatch: false })
    navigate$ = this.actions$
        .ofType(actions.GO)
        .pipe(
        map((action: actions.Go) => action.payload),
        tap(({ path, query: queryParams, extras }) => {
            this.router.navigate(path, { queryParams, ...extras });
        }));

    @Effect({ dispatch: false })
    navigateBack$ = this.actions$
        .ofType(actions.BACK)
        .pipe(tap(() => this.location.back));

    @Effect({ dispatch: false })
    navigateForward$ = this.actions$
        .ofType(actions.FORWARD)
        .pipe(tap(() => this.location.forward));
}

