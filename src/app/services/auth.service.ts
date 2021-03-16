import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://lab.arkbox.co/api/'
  
  constructor(public http: HttpClient) { }

  signIn(user){
    console.log(user)
    return this.http.post<any>(this.URL + 'account/login', user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    if (!localStorage.getItem('token')){
      return "jwttoken"
    }else{
      return localStorage.getItem('token')
    }

  }
}
