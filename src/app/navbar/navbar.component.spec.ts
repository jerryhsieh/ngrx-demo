import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { ShareModule } from '../share/share.module';
import { NavbarComponent } from './navbar.component';
import { Router } from '@angular/router';
import { UserService } from '../user/service/user.service';

// mocked up service
class UserServiceStub {
    getLoginStatus = jasmine.createSpy('getLoginStatus')
        .and.returnValue(Observable.of(true));

    getCurrentUser = jasmine.createSpy('getCurrentUser')
        .and.returnValue(Observable.of('Jerry'));

    logout = jasmine.createSpy('logout')
        .and.returnValue(true);
}

class RouterStub {
    navigateByUrl(url: string) { return url; }
}

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;
    let toolbar: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ShareModule],
            declarations: [NavbarComponent],
            providers: [
                { provide: UserService, useClass: UserServiceStub },
                { provide: Router, useClass: RouterStub }
            ]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        toolbar = fixture.debugElement.query(By.css('mat-toolbar'));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should change background', async(() => {
        component.login$ = Observable.of(true);
        fixture.detectChanges();
        expect(toolbar.styles.background).toBe('darkviolet');

        component.login$ = Observable.of(false);
        fixture.detectChanges();
        expect(toolbar.styles.background).toBe('seagreen');
    }));
});
