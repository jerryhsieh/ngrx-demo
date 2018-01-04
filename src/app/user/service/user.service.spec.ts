import { TestBed, inject, async } from '@angular/core/testing';

import { UserService } from './user.service';

import { HttpClientModule, HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppConfig } from '../../share';

describe('UserService', () => {
    let service: UserService;
    let backend: HttpTestingController;
    let appConfig: AppConfig;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                HttpClientTestingModule
            ],
            providers: [UserService, AppConfig]
        });

        service = TestBed.get(UserService);
        backend = TestBed.get(HttpTestingController);
        appConfig = TestBed.get(AppConfig);
    });

    afterEach(() => {
        backend.verify();
    })

    it('should be created', inject([UserService], (service: UserService) => {
        expect(service).toBeTruthy();
    }));

    it('should send an expected login request', async(() => {
        const user = {
            username: 'Jerry',
            password: 'jerry',
            rememberMe: true
        };

        service.login(user).subscribe(status => {
            console.log('got status is ', status);
            expect(status).toEqual(true);
        })

        const req = backend.expectOne(appConfig.apiUrl + '/users/authenticate');
        expect(req.request.method).toBe('POST');
        expect(req.request.body.username).toBe('Jerry');
        req.flush({ success: true, payload: '12345' });
    }));

    it('should return fail login request', async(() => {
        const user = {
            username: 'Jason',
            password: 'jason',
            rememberMe: false
        };

        service.login(user).subscribe(status => {
            console.log('got status is ', status);
            expect(status).toEqual(false);
        });

        const req = backend.expectOne(appConfig.apiUrl + '/users/authenticate');
        expect(req.request.method).toBe('POST');
        expect(req.request.body.username).toBe('Jason');
        req.flush({ success: false, payload: 'please check username or password' });


    }))

});
