//
//
// File name : report.guard.ts 
// Created by: Jerry Hsieh @ 2018-01-15
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { of } from 'rxjs/observable/of';
import { tap, take, switchMap, catchError } from 'rxjs/operators';


@Injectable()
export class ReportGuard implements CanActivate, CanActivateChild {

    constructor(
        private store: Store<fromStore.State>
    ) { }


    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }


    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }


    // helper function
    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.getReports)
            .pipe(
            tap(res => {
                if (res.length === 0) {
                    this.store.dispatch(new fromStore.getReportAction());
                }
            }),
            switchMap(res => of(res.length !== 0)),
            take(1)
            );
    }

}
