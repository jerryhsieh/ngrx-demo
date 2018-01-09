//
//
// File name : report.component.ts
// Created by: Jerry Hsieh @ 2018-01-09
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ReportsService } from '../services/reports.service';
import { Report } from '../../models';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

    report$: Observable<Report>;
    constructor(
        private reportService: ReportsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('rptId');
        this.report$ = this.reportService.getReport(+id);
    }

}
