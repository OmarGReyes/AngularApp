import { compileNgModule } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmployeesService } from '../../services/employees.service'
import { NgForm } from '@angular/forms'
import { Employee } from 'src/app/Models/Employee';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import  Swal  from 'sweetalert2'
  

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  encapsulation: ViewEncapsulation.None,
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
        this.employeesService.employees = res['Data'];
      },
      err => console.log(err)
    )
  }

  addEmployee(form:NgForm){
    this.employeesService.createEmployee(form.value).subscribe(
      res => {
        console.log(form.value);
        console.log(res);
        //this.getEmployees(),
        //form.reset()
      },
      req => console.log(req)
    )
  }
    

  deleteEmployee(employee: Employee){
    Swal.fire({  
      title: 'Are you sure want to remove?',  
      text: 'You will not be able to recover this file',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes',  
      cancelButtonText: 'No'  
    }).then((result) => {  
      if (result.value) {  
        Swal.fire(  
          'Deleted!',  
          'Your employee´s info has been deleted.',  
          'success'  
        )
        this.employeesService.deleteEmployee(employee).subscribe(
          (res) => {
            this.getEmployees()
          },
          (err) => console.log(err) 
        )   
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(
          'Cancelled',  
          '',  
          'error',    
        )
      }  
    })
  }

  editEmployee(employee: Employee){   
      this.employeesService.selectedEmployee = employee
  }

  modifyEmployee(employee: Employee){

    this.employeesService.putEmployee(employee).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
    Swal.fire({  
      icon: 'success',  
      title: 'Employee´s info updated',  
      showConfirmButton: false,  
      timer: 1800 
      }      
    )
    this.closeResult
    this.modalService.dismissAll()
  }


  
    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', scrollable: true }).result.then((result) => {
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


    simpleAlert(){  
      Swal.fire('Hello Angular');
    } 


  }
