import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Employee } from '../Models/Employee'
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  URL_API = "http://localhost:3000/api/subscribers"

  selectedEmployee: Employee = {
    Id:0,
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
    let params = new HttpParams().set("count","20");
    return this.http.get<Employee[]>(this.URL_API, {params: params} )
  }

  createEmployee(employee: Employee){
    return this.http.post(this.URL_API, employee);
  }

  deleteEmployee(employee: Employee){
    console.log(employee.Id);
    return this.http.delete(`${this.URL_API}/${employee.Id}`)
  }

  putEmployee(employee: Employee){
    console.log(employee.Id);
    
    return this.http.put<Employee[]>(`${this.URL_API}/${employee.Id}`, employee)
  }
}
