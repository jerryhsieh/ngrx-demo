//
//
// File name : auth.guard.ts
// Created by: Jerry Hsieh @ 2018-01-09
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Router, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../user/service/user.service';
import { tap, take } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    loginStatus$: Observable<boolean>
    constructor(
        private userService: UserService,
        private router: Router
    ) {
        this.loginStatus$ = userService.getLoginStatus();
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }


    canLoad(route: Route): Observable<boolean> {
        let url = `/${route.path}`;
        return this.checkLogin(url);
    }


    checkLogin(url: string): Observable<boolean> {
        return this.loginStatus$.pipe(
            tap(status => {
                if (!status) {
                    this.router.navigate(['user/login']);
                };
                console.log('current status', status);
            }),
            take(1)
        );

    }

}
