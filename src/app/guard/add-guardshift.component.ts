import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GuardService } from '../shared/guardservice';
import { Guard } from './guard';
import { GuardShift } from './guardshift';

@Component({
  selector: 'app-add-guardshift',
  templateUrl: './add-guardshift.component.html',
  styleUrls: ['./add-guardshift.component.css']
})
export class AddGuardshiftComponent implements OnInit {

  guardshift!: GuardShift;
  guard!: Guard;
  id: number = 0;
  addShiftForm!: FormGroup;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: GuardService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.service.getGuardById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.guard = data;
        this.addShiftForm = this.formBuilder.group({
          id: this.guard.id,
          inTime: ['', Validators.required],
          outTime: ['', Validators.required]
        })
      },
      (err) => console.log(err)
    );
  }

  onSubmit() {
    console.log(this.addShiftForm.value + "from onSubmit of add shift component")

    this.service.addGuardShift(this.id, this.addShiftForm.value).subscribe(
      (data: any) => {
        this.toastr.success('Successfully Added');
        this.guardshift = data;
        this.router.navigate(['guards'])
      },
      (err: any) => {
        this.toastr.error('Failed to Add Guard Shift Details: Invalid Status');
        console.log(err)
      }
    )
  }

}
