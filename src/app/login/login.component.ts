import { AppComponent } from './../app.component';
import { LoginResponse } from './../models/LoginResponse';
import { UserService } from './../services/user.service';
import { Component, OnInit ,Input,Injector} from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {
loginResponse:any;
getData:string;
 parent:AppComponent;

  constructor(private userservice:UserService,private inj:Injector,private router:Router) { 
    this.parent = this.inj.get(AppComponent);
  }

  ngOnInit() {
  }

  login(user:any){
   
  this.userservice.login(user).subscribe((resp:Response)=>{
    console.log(resp);
    this.loginResponse = resp.json();
    if(this.loginResponse.code == 0){
      this.parent.currentUser = this.loginResponse.token.user;
      localStorage.setItem("current",JSON.stringify(this.loginResponse.token.user));
      this.router.navigateByUrl("home");

    }
    
  })
  }

  

 
  

}
