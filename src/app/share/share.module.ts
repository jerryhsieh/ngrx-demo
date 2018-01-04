import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule, MatIconModule, MatMenuModule, MatSnackBarModule } from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';
import { AppConfig } from './app.config';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        MatSnackBarModule,
        ReactiveFormsModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        MatSnackBarModule,
        ReactiveFormsModule
    ],
    declarations: [],
    providers: [AppConfig]
})
export class ShareModule { }

