import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from '../share/share.module';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        ShareModule
    ],
    declarations: [LoginComponent]
})
export class UserModule { }
