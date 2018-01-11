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


// for selector
export const getUserState = (state: fromReducer.State) => state.user;                        // point to users state subtree
export const getIsLogin = createSelector(getUserState, user.getIsLogin);
export const getCurrentUser = createSelector(getUserState, user.getCurrentUser);
