//
//
// File name : app-routing.module.ts
// Created by: Jerry Hsieh @ 2017-12-31
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [{
    path: '',
    children: [
        { path: 'home', component: HomeComponent },
        { path: 'user', redirectTo: '/user', pathMatch: 'full' },
        { path: 'member', loadChildren: './member/member.module#MemberModule' },
        { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]
}];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        { enableTracing: true }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
