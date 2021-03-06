//
//
// File name : index.ts
// Created by: Jerry Hsieh @ 2018-01-10
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { ActionReducerMap } from '@ngrx/store';

import * as user from './user.reducers';
import * as router from './router.reducers';
import * as report from './report.reducers';

export interface State {
    user: user.UsersState;
    router: router.RouterState;
    report: report.ReportState;
}

export const reducers: ActionReducerMap<State> = {
    user: user.reducer,
    router: router.reducer,
    report: report.reducer
}

export { CustomeSerializer } from './router.reducers';



