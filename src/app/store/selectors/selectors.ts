//
//
// File name : selectors.ts
// Created by: Jerry Hsieh @ 2018-01-11
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { createSelector } from 'reselect';

import * as fromReducer from '../reducers';
import * as user from '../reducers/user.reducers';
import * as router from '../reducers/router.reducers';
import * as report from '../reducers/report.reducers';

import { Report } from '../../models';

// for selector
export const getUserState = (state: fromReducer.State) => state.user;                        // point to users state subtree
export const getIsLogin = createSelector(getUserState, user.getIsLogin);
export const getCurrentUser = createSelector(getUserState, user.getCurrentUser);

export const getRouterState = (state: fromReducer.State) => state.router;

export const getReportState = (state: fromReducer.State) => state.report;
export const getReports = createSelector(getReportState, report.getReports);

// join selector
export const getSelectedReport = createSelector(getRouterState, getReportState, (router, reportState): Report => {
    return router.state && reportState.reports.filter(report => report.id === +router.state.params.rptId)[0];
})
