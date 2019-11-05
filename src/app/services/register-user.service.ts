import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { UserAccount } from '../model/user-account';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  private url="http://localhost:8080/signup";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
    
  errorHandler(error: HttpErrorResponse){
      return throwError("Server Error: please try again later");
  }

  registerUser(userAccount) {
    return this.http.post<UserAccount>(this.url, userAccount, this.httpOptions)
    .pipe(retry(0),catchError(this.errorHandler));
    }
}
