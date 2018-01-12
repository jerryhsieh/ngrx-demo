//
//
// File name : navbar.component.ts
// Created by: Jerry Hsieh @ 2017-12-31
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { User } from '../models';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    login$: Observable<boolean>;
    user$: Observable<string>;
    constructor(
        private store: Store<fromStore.State>,
        private router: Router
    ) { }

    ngOnInit() {
        this.login$ = this.store.select(fromStore.getIsLogin);
        this.user$ = this.store.select(fromStore.getCurrentUser);
    }

    logout() {

        this.store.dispatch(new fromStore.LogoutAction());
        this.router.navigate(['/'])
    }

}
