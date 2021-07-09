import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  roleData: any[] = ['ADMIN','GUARD','FLATOWNER']
  email: string = '';
  password: string = '';
  role: string = '---Select---';
  invalidLogin: boolean = false;
  response!: JwtResponse

  constructor(private router: Router,private toastr: ToastrService,
    private loginservice: AuthenticationService) { }

  ngOnInit() {

  }

  checkLogin() {
    (this.loginservice.authenticate(this.email, this.password, this.role).subscribe(
      data => {
        this.toastr.success('Login Successful');
        console.log(data)
        // this.router.navigate([''])
        if(this.role == "ADMIN")
        {
          this.router.navigate(['admin-home'])
        }
        else if(this.role == "GUARD")
        {
          this.router.navigate(['guard-home'])
        }
        else if(this.role == "FLATOWNER")
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
    sessionStorage.setItem('email', this.email);
    sessionStorage.setItem('token', data.token)
    sessionStorage.setItem('id', data.id)
    console.log('data set')



  }

  home() {
    this.router.navigate([''])
  }

}
