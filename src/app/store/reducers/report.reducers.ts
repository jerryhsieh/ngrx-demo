//
//
// File name : report.reducers.ts 
// Created by: Jerry Hsieh @ 2018-01-14
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Action } from '@ngrx/store';

import * as actions from '../actions';
import { Report } from '../../models';

export interface ReportState {
    reports: Report[];
}

export const initialState: ReportState = {
    reports: []
}

export function reducer(state: ReportState = initialState, action: actions.ReportActions): ReportState {
    switch (action.type) {
        case actions.RESET_REPORT:
            return initialState;
        case actions.GETREPORT_SUCCESS:
            return { ...state, reports: action.payload };
        default:
            return state;
    }
}

// for selector
export const getReports = (state: ReportState) => state.reports;

