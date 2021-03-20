import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'
  
  constructor(public http: HttpClient) { }

  signIn(user){
    console.log(user);
    return this.http.post<any>(this.URL + '/account/login', user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
      return localStorage.getItem('token')
  }
}
