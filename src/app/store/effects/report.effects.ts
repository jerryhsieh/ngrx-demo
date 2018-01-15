//
//
// File name : report.effects.ts 
// Created by: Jerry Hsieh @ 2018-01-14
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';


import * as actions from '../actions';
import { ReportsService } from '../../member/services/reports.service';
import { Report, Response } from '../../models';

@Injectable()
export class ReportEffects {
    constructor(
        private action$: Actions,
        private reportService: ReportsService
    ) { }

    @Effect()
    getReportEffect$: Observable<Action> = this.action$.ofType(actions.GETREPORT)
        .switchMap(() => {
            return this.reportService.getReportsFromServer().pipe(
                map((res: Response) => {
                    if (res.success) {
                        return new actions.getReportSuccessAction(res.payload);
                    } else {
                        return new actions.getReportFailAction(res.payload);
                    }
                }),
                catchError(err => of(new actions.getReportFailAction(err))),
            )

        });

}

