import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../model/user-account';
import { Router } from '@angular/router';
import { RegisterUserService } from '../services/register-user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userAccount=new UserAccount();
  errorMessage:String;

  constructor(private registerUserService:RegisterUserService,private router: Router) { }

  ngOnInit() {
  }

  submitForm(f: NgForm){
    console.log(JSON.stringify(this.userAccount));
    this.registerUserService.registerUser(JSON.stringify(this.userAccount)).subscribe(data => {this.router.navigate(["/login"]);
  }
  ,error => this.errorMessage=error); 
  }

}
