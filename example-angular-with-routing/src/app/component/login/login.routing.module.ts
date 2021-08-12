import { NgModule } from "@angular/core"; 
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login_component/login.component";

const loginRoute:Routes=[
    {path:'login' , redirectTo:'/loginsystem'},
    {path:'loginsystem', redirectTo:'/loginsystem'},
    {path:'loginsystem', component: LoginComponent}
]
@NgModule({
  imports: [
    RouterModule.forChild(loginRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule{}