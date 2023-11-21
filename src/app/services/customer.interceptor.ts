import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerInterceptor implements HttpInterceptor {
  // ng g interceptor name
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('loginToken')
    const newCloneRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token} `
      }
    })
    // return next.handle(request);
    return next.handle(newCloneRequest);

  }
}
