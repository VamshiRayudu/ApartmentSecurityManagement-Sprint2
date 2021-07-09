import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService, User } from '../shared/authentication.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {

  user!:User;
  editForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AuthenticationService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required]
    })
  }

  onSubmit() {

    const formValue = this.editForm.value;
    const data: any = {
      "emailId": sessionStorage.getItem('email'),
      "password": formValue.oldPassword,
      "role": sessionStorage.getItem('role')
    };

    this.service.updatePassword(formValue.newPassword,data).
      subscribe(
        (data) => {
          this.toastr.success('Successfully Updated');
          this.user = data;
          if(sessionStorage.getItem('role') == "ADMIN")
          {
            this.router.navigate(['admin-home'])
          }
          if(sessionStorage.getItem('role') == "GUARD")
          {
            this.router.navigate(['guard-home'])
          }
          if(sessionStorage.getItem('role') == "FLATOWNER")
          {
            this.router.navigate(['owner-home'])
          }
        },
        (err) => { 
          this.toastr.error('Failed to Update Password: Invalid Status');
          console.log(err) }
      )
  }
}