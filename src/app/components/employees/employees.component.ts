import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../../services/employees.service'
import { NgForm } from '@angular/forms'
import { Employee } from 'src/app/Models/Employee';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
  

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeeComponent implements OnInit {

  closeResult: string;

  constructor(
    public employeesService: EmployeesService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.getEmployees()
  }

  resetForm(form: NgForm){
    form.reset()
  }
  
  getEmployees(){
    this.employeesService.getEmployees().subscribe(
      res => {
        console.log(res['Data']);
        
        this.employeesService.employees = res['Data'];
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

      
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  }
