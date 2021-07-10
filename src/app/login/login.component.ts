import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../register/user';
import { AuthenticationService } from '../shared/authentication.service';

export class JwtResponse {

  jwtToken!: string;
  id!: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  roleData: any[] = ['ADMIN', 'GUARD', 'FLATOWNER']

  user: User = {
    userName: '',
    password: '',
    role: '---Select---',
    emailId: '',
    mobileNumber: 0,
    name: ''
  }

  emailId: string = '';
  password: string = '';
  role: string = '---Select---';
  isValidFormSubmitted: boolean = false;
  
  invalidLogin: boolean = false;
  response!: JwtResponse

  constructor(private router: Router,private toastr: ToastrService,
    private loginservice: AuthenticationService) { }

  ngOnInit() {

  }

  checkLogin(form1: any) {
    console.log("in create user", form1.value)
    this.isValidFormSubmitted = false;
    if (form1.valid) {
      this.isValidFormSubmitted = true;
    } else {
      return;
    }

    (this.loginservice.authenticate(this.user.emailId, this.user.password, this.user.role).subscribe(
      data => {
        this.toastr.success('Login Successful');
        console.log(data)
        // this.router.navigate([''])
        if(this.user.role == "ADMIN")
        {
          this.router.navigate(['admin-home'])
        }
        else if(this.user.role == "GUARD")
        {
          this.router.navigate(['guard-home'])
        }
        else if(this.user.role == "FLATOWNER")
        {
          this.router.navigate(['owner-home'])
        }
        this.invalidLogin = false
      },
      error => {
        this.toastr.error('Login Failed: Invalid Credentials');
        this.invalidLogin = true
      }
    )
    );

  }

  setValues(data: any) {
    console.log("in set values", data)
    sessionStorage.setItem('email', this.emailId);
    sessionStorage.setItem('token', data.token)
    sessionStorage.setItem('id', data.id)
    console.log('data set')



  }

  home() {
    this.router.navigate([''])
  }

}