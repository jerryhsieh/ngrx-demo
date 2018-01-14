//
//
// File name : index.ts
// Created by: Jerry Hsieh @ 2018-01-10
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { UserEffects } from './user.effects';
import { RouterEffects } from './router.effects';
import { ReportEffects } from './report.effects';

export const effects: any[] = [UserEffects, RouterEffects, ReportEffects];

export * from './user.effects';
export * from './router.effects';
export * from './report.effects';
