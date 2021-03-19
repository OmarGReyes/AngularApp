import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service'
import {NgForm} from '@angular/forms'
import {Employee} from 'src/app/Models/Employee'

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  constructor(public employeesService: EmployeesService) { }

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
    if (form.value._id){
      this.employeesService.putEmployee(form.value).subscribe(
        res => {
          this.getEmployees(),
          form.reset()
        },
        err => console.log(err)
      )
      
    }else{
      this.employeesService.createEmployee(form.value).subscribe(
        res => {
          this.getEmployees(),
          form.reset()
        },
        req => console.log(req)
        )
      }
    
  }

  deleteEmployee(id: string){
    if (confirm('Sure to delete?')){
      this.employeesService.deleteEmployee(id).subscribe(
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
