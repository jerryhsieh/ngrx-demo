//
//
// File name : report-list.component.ts
// Created by: Jerry Hsieh @ 2018-01-08
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReportsService } from '../services/reports.service';
import { Report } from '../../models';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'app-report-list',
    templateUrl: './report-list.component.html',
    styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
    reports$: Observable<Report[]>;
    constructor(
        private reportService: ReportsService,
        private router: Router
    ) { }

    ngOnInit() {
        this.reports$ = this.reportService.getReports();
    }

    onClick(report: Report) {
        this.router.navigate(['/member/report', report.id]);
    }
}
