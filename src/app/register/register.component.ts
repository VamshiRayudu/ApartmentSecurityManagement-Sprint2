import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../shared/registerservice';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User= {
    userName: '',
    password:'',
    role:'',
    emailId:'',
    mobileNumber: 0,
    name:''
  }
   
  constructor(
    private registerService: RegisterService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  createUser(form1: any): void {
    console.log("in create user",form1.value)
    
    this.registerService.createUser(this.user)
        .subscribe( data => {
          console.log(data);
          this.router.navigate([''])
        });
  };
}
