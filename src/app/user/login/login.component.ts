
//
//
// File name : login.component.ts
// Created by: Jerry Hsieh @ 2018-01-02
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    constructor(
        private fb: FormBuilder,
        private store: Store<fromStore.State>,
        private router: Router,
        private snackbar: MatSnackBar
    ) { }

    ngOnInit() {
        this.form = this.fb.group({
            username: ['', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')],
            password: ['', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')],
            rememberMe: [true]
        })
    }
    get username() { return this.form.get('username'); }
    get password() { return this.form.get('password'); }
    get rememberMe() { return this.form.get('rememberMe') }

    login() {
        this.store.dispatch(new fromStore.LoginAction(this.form.value));
        this.store.select(fromStore.getIsLogin)
            .subscribe(res => {
                if (res) {
                    this.snackbar.open('登入成功', 'OK', { duration: 3000 });
                    this.router.navigate(['/member']);
                } else {
                    this.snackbar.open('請檢查使用者名稱及密碼', 'OK', { duration: 3000 });
                }

            })
    }
}
