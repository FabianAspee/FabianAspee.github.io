import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LoginService } from "../login.service";

@Component({
    selector: 'login-component',
    templateUrl: './login.template.html',
    providers: [LoginService],
    styleUrls: ['./login.style.css']
  })

export class LoginComponent{

    constructor(private service:LoginService, route: ActivatedRoute){}
}