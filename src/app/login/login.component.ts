import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';

export class JwtResponse{

  jwtToken!:string;
  id!:number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';
  role:string = '';
  invalidLogin:boolean = false;
  response!:JwtResponse

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
    
  }

  checkLogin() {
    (this.loginservice.authenticate(this.email, this.password, this.role).subscribe(
      data => {
        console.log(data)
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
      }
    )
    );

  }

  setValues(data:any){
    console.log("in set values",data)
    sessionStorage.setItem('email',this.email);
        sessionStorage.setItem('token',data.token)
        sessionStorage.setItem('id',data.id)
      console.log('data set')



  }

}
