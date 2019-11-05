import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{
  constructor(private authenticationService:AuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  console.log("ErrorInterceptorService");
  return next.handle(request).pipe(catchError(err => {
  console.log("ErrorInterceptorService");
  if (err.status === 401) {
  console.log("ErrorInterceptorService 401");
  this.authenticationService.logout();
  
  }
  const error = err.error.message || err.statusText;
  return throwError(error);
  }))
  }
  }
  
