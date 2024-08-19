import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token') ?? '';
    console.log(token)
    const newHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "bearer": token
    })
    const authReq = req.clone({
      headers: newHeaders
    });
    return next.handle(authReq);
  }
}
