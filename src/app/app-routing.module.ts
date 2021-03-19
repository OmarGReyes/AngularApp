import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'

//components
import { HomeComponent } from './components/home/home.component' ;
import { EmployeeComponent } from './components/employees/employees.component';
import { SigninComponent } from './components/signin/signin.component'; 
import { NewemployeeComponent } from './components/newemployee/newemployee.component';
import { ModifyemployeeComponent } from './components/modifyemployee/modifyemployee.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'employees',
    component: EmployeeComponent,
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'newemployee',
    component: NewemployeeComponent
  },{
    path: 'modifyemployee',
    component: ModifyemployeeComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
