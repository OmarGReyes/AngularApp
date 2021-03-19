import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from '../Models/Employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  URL_API = "http://localhost:3000/api/subscribers"

  selectedEmployee: Employee = {
    Name: '',
    Email: '',
    CountryCode: '',
    CountryName: '',
    PhoneNumber: 0,
    PhoneCode: 0,
    JobTitle: '',
    Area: '',
    Topics: [],
  }

  employees: Employee[]
  
  constructor (public http: HttpClient){}

  getEmployees(){
    return this.http.get<Employee[]>(this.URL_API)
  }

  createEmployee(employee: Employee){
    return this.http.post(this.URL_API, employee);
  }

  deleteEmployee(Id: string){
    return this.http.delete(`${this.URL_API}/${Id}`)
  }

  putEmployee(employee: Employee){
    return this.http.put(`${this.URL_API}/${employee.Id}`, employee)
  }
}
