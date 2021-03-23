import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authServices: AuthService,
    private router: Router
  ){
    
  }

  canActivate(): boolean{
    if (this.authServices.loggedIn()){
      return true;
    }
    this.router.navigate(['/signin'])
  }

  }
