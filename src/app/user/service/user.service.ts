//
//
// File name : user.service.ts
// Created by: Jerry Hsieh @ 2018-01-04
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { AppConfig } from '../../share';
import { User, Response } from '../../models';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {
    loginStatus = new BehaviorSubject<boolean>(false);
    currentUser = new BehaviorSubject<User>(null);
    constructor(
        private http: HttpClient,
        private appConfig: AppConfig
    ) { }

    loginServer(loginData): Observable<Response> {
        let username = loginData.username.trim();
        let password = loginData.password.trim();
        return this.http.post<Response>(this.appConfig.apiUrl + '/users/authenticate', { username: username, password: password });
    }

    login(loginData): Observable<boolean> {
        return this.loginServer(loginData)
            .map((res: Response) => {
                if (res.success) {
                    this.loginStatus.next(true);
                    this.currentUser.next(loginData.username);
                    return true;
                } else {
                    return false;
                }
            },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log('client-side error');
                } else {
                    console.log('server-side error');
                }
                return of(false);
            })
    }
    logout() {
        this.loginStatus.next(false);
        this.currentUser.next(null);
    }

    getLoginStatus(): Observable<boolean> {
        return this.loginStatus;
    }

    getCurrentUser(): Observable<User> {
        return this.currentUser;
    }

}
