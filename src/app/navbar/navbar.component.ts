//
//
// File name : navbar.component.ts
// Created by: Jerry Hsieh @ 2017-12-31
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    login$: Observable<boolean>;
    constructor() { }

    ngOnInit() {
        //this.login$ = Observable.of(true);
    }

    logout() {
        this.login$ = Observable.of(false);
    }

}
