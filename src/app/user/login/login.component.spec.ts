import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ShareModule } from '../../share/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Observable } from 'rxjs/Observable';
import { UserService } from '../service/user.service';

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



describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ShareModule, BrowserAnimationsModule],
            declarations: [LoginComponent],
            providers: [
                { provide: UserService, useClass: UserServiceStub }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.form.valid).toBeFalsy();
    });

    it('username field validity', () => {
        // initial should be invalid
        let username = component.form.controls['username'];
        expect(username.valid).toBeFalsy();

        // fail if username is empty
        let errors = {};
        errors = username.errors || {};
        expect(errors['required']).toBeTruthy();

        // fail if username less than 5 char
        username.setValue("test");
        errors = username.errors || {};
        expect(errors['pattern']).toBeTruthy();

    })

    it('password field validity', () => {
        // initial should be invalid
        let password = component.form.controls['password'];
        expect(password.valid).toBeFalsy();

        // fail if password is empty
        let errors = {};
        errors = password.errors || {};
        expect(errors['required']).toBeTruthy();

        // fail if password less than 5 char
        password.setValue("test");
        errors = password.errors || {};
        expect(errors['pattern']).toBeTruthy();

    })

    it('submit a form', () => {
        expect(component.form.valid).toBeFalsy();
        component.form.controls['username'].setValue('Jason');
        component.form.controls['password'].setValue('jason101');
        expect(component.form.valid).toBeTruthy();
        // let user: User
        // component.loggedIn.subscribe(value => user = value);
        // component.login();
        // expect(user.username).toBe("Jason");
        // expect(user.password).toBe("jason101");
    })

});
