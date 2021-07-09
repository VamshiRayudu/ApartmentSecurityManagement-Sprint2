import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../shared/registerservice';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  roleData: any[] = ['ADMIN','GUARD','FLATOWNER']

  user:User= {
    userName: '',
    password:'',
    role:'---Select---',
    emailId:'',
    mobileNumber: 0,
    name:''
  }
   
  constructor(
    private registerService: RegisterService,
    private router:Router,private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  createUser(form1: any): void {
    console.log("in create user",form1.value)
    
    this.registerService.createUser(this.user)
        .subscribe( data => {
          this.toastr.success('Registration Successful');
          console.log(data);
          this.router.navigate(['admin-home'])
        },
        error => {
          this.toastr.error('Failed to Register: Email Id Already Exists');
          
        }
        );
       
  };

  home() {
    this.router.navigate(['admin-home'])
  }
}
