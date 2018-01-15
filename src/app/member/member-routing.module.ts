//
//
// File name : member-routing.module.ts
// Created by: Jerry Hsieh @ 2018-01-08
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportListComponent } from './report-list/report-list.component';
import { ReportComponent } from './report/report.component';
import { ReportGuard } from './guards/report.guard';

const routes: Routes = [
    {
        path: '',
        canActivateChild: [ReportGuard],
        children: [
            { path: 'report-list', component: ReportListComponent },
            { path: 'report/:rptId', component: ReportComponent },
            { path: '', redirectTo: 'report-list', pathMatch: 'full' }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MemberRoutingModule { }
