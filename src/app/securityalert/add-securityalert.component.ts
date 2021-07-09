import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SecurityAlertService } from '../shared/securityalertservice';
import { SecurityAlert } from './securityalert';

@Component({
  selector: 'app-add-securityalert',
  templateUrl: './add-securityalert.component.html',
  styleUrls: ['./add-securityalert.component.css']
})
export class AddSecurityalertComponent implements OnInit {

  securityAlert!: SecurityAlert;
  id: number = 0;
  addSecurityAlertForm!: FormGroup;
  dateTimeOfAlert = new Date();
  public isAdmin: boolean = false;
  public isGuard: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: SecurityAlertService,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.addSecurityAlertForm = this.formBuilder.group({
      alert: ['', Validators.required],
      message: ['', Validators.required]
    })

    var role = sessionStorage.getItem('role')
    if (role == "ADMIN") {
      this.isAdmin = true;
    }
    else if (role == "GUARD") {
      this.isGuard = true;
    }
  }
  onSubmit() {
    console.log("in the formsubmission for add")
    const formValue = this.addSecurityAlertForm.value;
    if (this.isAdmin) {
      const adminSecurityAlert: any = {
        "admin": {
          "id": Number(sessionStorage.getItem('id'))
        },
        "alert": formValue.alert,
        "dateTimeOfAlert": new Date(this.dateTimeOfAlert).toISOString(),
        "message": formValue.message,
      };
      this.service.addSecurityAlert(adminSecurityAlert).
        subscribe(
          (data) => { 
            this.toastr.success('Successfully Added');
            this.securityAlert = data; this.router.navigate(['securityAlerts']) },
          (err) => {
            this.toastr.error('Failed to Add Security Alert Details: Invalid Status');
            console.log(err)
          }
        )
    }
    else if (this.isGuard) {
      const guardSecurityAlert: any = {
        "guard": {
          "id": Number(sessionStorage.getItem('id'))
        },
        "alert": formValue.alert,
        "dateTimeOfAlert": new Date(this.dateTimeOfAlert).toISOString(),
        "message": formValue.message,
      };
      this.service.addSecurityAlert(guardSecurityAlert).
        subscribe(
          (data) => { 
            this.toastr.success('Successfully Added');
            this.securityAlert = data; this.router.navigate(['securityalerts']) },
          (err) => {
            this.toastr.error('Failed to Add Security Alert Details: Invalid Status');
            console.log(err)
          }
        )
    }
  }
}