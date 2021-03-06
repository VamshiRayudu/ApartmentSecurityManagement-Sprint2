import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterService } from './registerservice';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private service: RegisterService) { }

  /**
   * Interceptor function
   * @param req 
   * @param next 
   * @returns 
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (sessionStorage.getItem('email') && sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')!
        }
      })
    }

    return next.handle(req);

  }
}