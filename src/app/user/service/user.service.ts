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

import { UtilsService } from '../../services';

@Injectable()
export class UserService {
    loginStatus$ = new BehaviorSubject<boolean>(false);
    currentUser$ = new BehaviorSubject<User>(null);
    constructor(
        private http: HttpClient,
        private appConfig: AppConfig,
        private utils: UtilsService
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
                    this.loginStatus$.next(true);
                    this.currentUser$.next(loginData.username);
                    if (loginData.rememberMe) {
                        this.utils.writeToken(res.payload);
                    }
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
        this.loginStatus$.next(false);
        this.currentUser$.next(null);
        this.utils.removeToken();
    }

    getLoginStatus(): Observable<boolean> {
        return this.loginStatus$;
    }

    getCurrentUser(): Observable<User> {
        return this.currentUser$;
    }

    // when startup
    checkUser(): Observable<boolean> {
        if (!this.utils.isTokenExpired()) {
            this.loginStatus$.next(true);
            this.getUser();
            return of(true);
        } else {
            console.log('no token or token is expired');
            this.logout();
            //this.utils.removeToken();
            return of(false);
        }
    }

    // get user from server
    getUserFromServer(): Observable<User> {
        if (!this.utils.isTokenExpired()) {
            const token = this.utils.getToken();
            return this.http.post(this.appConfig.apiUrl + '/users/currentUser', { 'token': token })
                .map((res: Response) => {
                    if (res.success) {
                        return res.payload;
                    } else {
                        return null;
                    }
                })
        } else {
            return of(null);
        }
    }

    getUser() {
        this.getUserFromServer()
            .subscribe(res => {
                this.currentUser$.next(res);
            },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log('client-side error');
                } else {
                    console.log('server-side error');
                }
            })
    }


}
