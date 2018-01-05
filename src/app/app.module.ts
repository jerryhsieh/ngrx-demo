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
        UtilsService,
        StartupService,
        {
            provide: APP_INITIALIZER,
            useFactory: startupServiceFactory,
            deps: [StartupService, Injector],
            multi: true
        }

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
