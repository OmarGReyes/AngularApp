import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service'
import {NgForm} from '@angular/forms'
import {Employee} from 'src/app/Models/Employee'
import { Router } from '@angular/router'

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
      this.employeesService.createEmployee(form.value).subscribe(
        res => {
          
          // console.log(res);
          this.getEmployees(),
          form.reset()
          this.router.navigate(['/employees'])
        },
        req => console.log(req)
        )
    
  }

  deleteEmployee(employee: Employee){
    if (confirm('Sure to delete?')){
      this.employeesService.deleteEmployee(employee).subscribe(
        (res) => {
          this.getEmployees()
        },
        (err) => console.log(err) 
      ) 
    }
  }

  editEmployee(employee: Employee){
    this.employeesService.selectedEmployee = employee
  }
}
