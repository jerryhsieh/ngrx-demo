//
//
// File name : login.component.ts
// Created by: Jerry Hsieh @ 2018-01-02
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    constructor(
        private fb: FormBuilder
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

    }

}
