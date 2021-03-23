import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import  Swal  from 'sweetalert2'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    username: "",
    password: ""
  }

  constructor(
    private authServices: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authServices.signIn(this.user).subscribe(
      res=> {
        console.log(this.user);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/employees'])
      },
      err => {
        Swal.fire({
          title: 'Error',   
          text: err.error,  
          showConfirmButton: false,  
          timer: 1000
        } 
        )
      }

      
    )
    
  }

}
