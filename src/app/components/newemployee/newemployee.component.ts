import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service'
import {NgForm} from '@angular/forms'
import { Employee } from 'src/app/Models/Employee'
import { Router } from '@angular/router'
import  Swal  from 'sweetalert2'


@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  constructor(
    public employeesService: EmployeesService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  resetForm(form: NgForm){
    form.reset()
  }
  
  getEmployees(){
    this.employeesService.getEmployees().subscribe(
      res => {
        this.employeesService.employees = res;
      },
      err => console.log(err)
    )
  }

  addEmployee(form:NgForm){
    if(!form.value.Name){
      Swal.fire({  
        icon: 'error',  
        title: 'Oops...',  
        text: 'Something went wrong!',   
      })
    }else{
      this.employeesService.createEmployee(form.value).subscribe(
        res => {
          // console.log(res);
          this.getEmployees(),
          form.reset()
          this.router.navigate(['/employees'])
          Swal.fire({    
            icon: 'success',  
            title: `The employee ${form.value.name} has been created`,  
            showConfirmButton: false,  
            timer: 1000  
          }) 
        },
        req => console.log(req)
      ) 
    }
    
  }

}
