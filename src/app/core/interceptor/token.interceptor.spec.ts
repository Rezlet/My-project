import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

describe('AuthInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    // Set a token in localStorage for testing
    localStorage.setItem('token', 'mock-token');
  });

  afterEach(() => {
    // Ensure that there are no outstanding requests
    httpTestingController.verify();
  });

  it('should add an Authorization header when token is present', () => {
    httpClient.get('/test-url').subscribe();

    const req = httpTestingController.expectOne('/test-url');
    expect(req.request.headers.has('Authorization')).toBeTrue();
    expect(req.request.headers.get('Authorization')).toEqual('Bearer mock-token');
    req.flush({});
  });

  it('should not add an Authorization header when no token is present', () => {
    localStorage.removeItem('token');
    
    httpClient.get('/test-url').subscribe();

    const req = httpTestingController.expectOne('/test-url');
    expect(req.request.headers.has('Authorization')).toBeFalse();
    req.flush({});
  });
});
