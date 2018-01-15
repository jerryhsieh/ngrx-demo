//
//
// File name : report.component.ts
// Created by: Jerry Hsieh @ 2018-01-09
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Report } from '../../models';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportComponent implements OnInit {

    report$: Observable<Report>;
    constructor(
        private store: Store<fromStore.State>
    ) { }

    ngOnInit() {
        this.report$ = this.store.select(fromStore.getSelectedReport);
    }

}
