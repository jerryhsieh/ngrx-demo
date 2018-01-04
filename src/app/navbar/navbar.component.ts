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

import { UserService } from '../user/service/user.service';
import { User } from '../models';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    login$: Observable<boolean>;
    user$: Observable<User>;
    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        //this.login$ = Observable.of(true);
        this.login$ = this.userService.getLoginStatus();
        this.user$ = this.userService.getCurrentUser();
    }

    logout() {
        //this.login$ = Observable.of(false);
        this.userService.logout();
        this.router.navigate(['/'])
    }

}
