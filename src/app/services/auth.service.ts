import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://simpleatuhjs.herokuapp.com/api'
  
  constructor(
    public http: HttpClient,
    private router: Router
    ) { }

  signIn(user){
    return this.http.post<any>(this.URL + '/account/login', user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logOut(){
    localStorage.removeItem('token');
  }

  getToken(){
      return localStorage.getItem('token')
  }
}
