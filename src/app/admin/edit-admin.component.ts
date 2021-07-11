import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../shared/adminservice';

import { Admin } from './admin';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
  admin!: Admin;
  editForm!: FormGroup;
  id: number = 0;

  submitted = false;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AdminService, private toastr: ToastrService) { }


  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.service.getAdminById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.admin = data;
        this.editForm = this.formBuilder.group({
          id: this.id,
          name: this.admin.name,
          // mobileNumber: this.admin.mobileNumber,
          // userName: this.admin.userName,
          // name: ['', Validators.required],
          mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
          userName: ['', Validators.required]
        })
      },
      (err) => {
        console.log(err)
      }
    );
  }

  /**
   * Form Validation
   */
  get f() {
    return this.editForm.controls;
  }

  /**
   * On Submit Button
   * @returns Admin
   */
  onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    console.log('form onSubmit of edit admin' + this.admin);
    const formValue = this.editForm.value;
    const data: any = {
      "id": this.id,
      "emailId": this.admin.emailId,
      "mobileNumber": formValue.mobileNumber,
      "name": formValue.name,
      "password": this.admin.password,
      "role": this.admin.role,
      "userName": formValue.userName
    };

    this.service.updateAdmin(data).
      subscribe(
        (data) => {
          this.toastr.success('Successfully Updated');
          this.admin = data;
          this.router.navigate(['admin-home'])
        },
        (err) => {
          this.toastr.error('Failed to Update Admin Details: Invalid Status');
          console.log(err)
        }
      )
  }

}
