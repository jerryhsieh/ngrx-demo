//
//
// File name : member.module.ts
// Created by: Jerry Hsieh @ 2018-01-08
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from '../share';

import { MemberRoutingModule } from './member-routing.module';
import { ReportsService } from './services/reports.service';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportComponent } from './report/report.component';

@NgModule({
    imports: [
        CommonModule,
        MemberRoutingModule,
        ShareModule
    ],
    declarations: [ReportListComponent, ReportComponent],
    providers: [ReportsService]
})
export class MemberModule { }
