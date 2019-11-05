import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
  private router: Router
  ) { }
  canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) {
  let currentToken = localStorage.getItem('token');
  if (currentToken) {
  return true;
  }
  return false;
  }
  }
  
