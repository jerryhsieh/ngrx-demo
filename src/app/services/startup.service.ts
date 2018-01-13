//
//
// File name : startup.service.ts
// Created by: Jerry Hsieh @ 2018-01-05
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//
import { Injectable } from '@angular/core';

import { UtilsService } from '.';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { filter } from 'rxjs/operators';

@Injectable()
export class StartupService {

    constructor(
        private utils: UtilsService,
        private store: Store<fromStore.State>
    ) { }

    load(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!this.utils.isTokenExpired()) {
                this.store.dispatch(new fromStore.GetUserAction());
                return this.store.select(fromStore.getIsLogin)
                    .pipe(
                    filter(status => status)
                    )
                    .subscribe(res => {
                        if (res) {
                            setInterval(() => {
                                this.checkStatus();
                            }, 1000 * 60 * 5)    // check current status every 5 min
                        }
                        resolve(res);
                    }, err => {
                        console.log(err);
                        reject(err);
                    });
            } else {
                resolve('no token or token expired');
            }
        });
    }

    checkStatus() {
        if (this.utils.isTokenExpired()) {   // if token expired or not exist
            this.store.dispatch(new fromStore.LogoutAction());
            this.store.dispatch(new fromStore.Go({ path: ['/'] }));
        }
    }

}
