import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SecurityAlertService } from '../shared/securityalertservice';
import { SecurityAlert } from './securityalert';

@Component({
  selector: 'app-edit-securityalert',
  templateUrl: './edit-securityalert.component.html',
  styleUrls: ['./edit-securityalert.component.css']
})
export class EditSecurityalertComponent implements OnInit {


  securityalert!: SecurityAlert;
  editForm!: FormGroup;
  id: number = 0;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: SecurityAlertService,private toastr: ToastrService) { }


  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.service.getSecurityAlertById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.securityalert = data;
        this.editForm = this.formBuilder.group({

          id: this.securityalert.id,
          alert: this.securityalert.alert,
          message: this.securityalert.message,

        })
      },
      (err) => console.log(err)
    );
  }

  onSubmit() {

    console.log('form onSubmit of edit securityalert' + this.editForm.value);
    this.service.updateSecurityAlert(this.id, this.editForm.value).
      subscribe(
        (data) => {
          this.toastr.success('Successfully Updated');
          this.securityalert = data;
          this.router.navigate(['securityalerts'])
        },
        (err) => { 
          this.toastr.error('Failed to Update Security Alert Details: Invalid Status');
          console.log(err) }
      )
  }
}
