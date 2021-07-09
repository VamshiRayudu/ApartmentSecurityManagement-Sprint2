import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OwnerService } from '../shared/ownerservice';
import { Owner } from './owner';

@Component({
  selector: 'app-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.css']
})
export class EditOwnerComponent implements OnInit {

  owner!: Owner;
  editForm!: FormGroup;
  id: number = 0;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: OwnerService,private toastr: ToastrService) { }


  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.service.getOwnerById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.owner = data;
        this.editForm = this.formBuilder.group({
          id: this.id,
          name: this.owner.name,
          mobileNumber: this.owner.mobileNumber,
          userName: this.owner.userName,
        })
      },
      (err) => console.log(err)
    );
  }

  onSubmit() {

    console.log('form onSubmit of edit customer' + this.owner);
    const formValue = this.editForm.value;
    const data: any = {
      "id": this.id,
      "emailId": this.owner.emailId,
      "mobileNumber": formValue.mobileNumber,
      "name": formValue.name,
      "password": this.owner.password,
      "role": this.owner.role,
      "userName": formValue.userName
    };

    this.service.updateOwner(data).
      subscribe(
        (data) => {
          this.toastr.success('Successfully Updated');
          this.owner = data;
          if(sessionStorage.getItem('role') == "ADMIN")
          {
            this.router.navigate(['owners'])
          }
          else if(sessionStorage.getItem('role') == "FLATOWNER")
          {
            this.router.navigate(['owner-home'])
          }
        },
        (err) => { 
          this.toastr.error('Failed to Update Owner Details: Invalid Status');
          console.log(err) }
      )
  }
}