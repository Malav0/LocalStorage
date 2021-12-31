import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { PersonComponent } from './person/person.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  // {
  //   path:'company', component:CompanyComponent
  // },
  // {
  //   path:'person', component:PersonComponent
  // }
  {
     path: "", pathMatch: "full", redirectTo: "login" 
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'signup', component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
