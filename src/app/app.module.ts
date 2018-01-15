//
//
// File name : app.module.ts
// Created by: Jerry Hsieh @ 2017-12-17
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ShareModule } from './share/share.module';
import { UserModule } from './user/user.module';
import { UtilsService } from './services/utils.service';
import { StartupService } from './services/startup.service';

import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';

// for ngrx/store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import * as fromStore from './store';

import { ReportsService } from './member/services/reports.service';

export function startupServiceFactory(startupService: StartupService): Function { return () => startupService.load(); }

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ShareModule,
        UserModule,
        HttpClientModule,
        StoreModule.forRoot(fromStore.reducers),
        EffectsModule.forRoot(fromStore.effects),
        !environment.production ? StoreRouterConnectingModule : [],
        !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem('access_token');
                },
                whitelistedDomains: ['localhost:3000']
            }
        })
    ],
    providers: [
        AuthGuard,
        UtilsService,
        ReportsService,
        StartupService,
        {
            provide: APP_INITIALIZER,
            useFactory: startupServiceFactory,
            deps: [StartupService, Injector],
            multi: true,

        },
        { provide: RouterStateSerializer, useClass: fromStore.CustomeSerializer }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
