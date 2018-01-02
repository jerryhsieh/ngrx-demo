import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ShareModule } from './share/share.module';
import { UserModule } from './user/user.module';

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
        UserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
