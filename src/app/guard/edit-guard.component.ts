import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GuardService } from '../shared/guardservice';
import { Guard } from './guard';

@Component({
  selector: 'app-edit-guard',
  templateUrl: './edit-guard.component.html',
  styleUrls: ['./edit-guard.component.css']
})
export class EditGuardComponent implements OnInit {

  guard!: Guard;
  editForm!: FormGroup;
  id: number = 0;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: GuardService, private toastr: ToastrService) { }


  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.service.getGuardById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.guard = data;
        this.editForm = this.formBuilder.group({
          id: this.id,
          name: this.guard.name,
          mobileNumber: this.guard.mobileNumber,
          userName: this.guard.userName,
        })
      },
      (err) => console.log(err)
    );
  }

  onSubmit() {

    console.log('form onSubmit of edit guard' + this.guard);
    const formValue = this.editForm.value;
    const data: any = {
      "id": this.id,
      "emailId": this.guard.emailId,
      "mobileNumber": formValue.mobileNumber,
      "name": formValue.name,
      "password": this.guard.password,
      "role": this.guard.role,
      "userName": formValue.userName
    };

    this.service.updateGuard(data).
      subscribe(
        (data) => {
          this.toastr.success('Successfully Updated');
          this.guard = data;
          this.router.navigate(['guards'])
        },
        (err) => { 
          this.toastr.error('Failed to Update Guard Details: Invalid Status');
          console.log(err) }
      )
  }
}
