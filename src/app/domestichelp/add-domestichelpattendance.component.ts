import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Attendance } from './attendance';
import { AttendanceService } from '../shared/attendanceservice';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-domestichelpattendance',
  templateUrl: './add-domestichelpattendance.component.html',
  styleUrls: ['./add-domestichelpattendance.component.css']
})
export class AddDomestichelpattendanceComponent implements OnInit {


  attendance!: Attendance;
  id: number = 0;
  addAttendanceForm!: FormGroup;

  submitted= false;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AttendanceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.addAttendanceForm = this.formBuilder.group({
      dateOfAttendance: ['', Validators.required],
      inTime: ['', Validators.required],
      outTime: ['', Validators.required]
    })
  }

  get f() {
    return this.addAttendanceForm.controls ;
  }

  onSubmit() {
    this.submitted = true;
    if(this.addAttendanceForm.invalid) 
    {
      return ;
    }
    console.log(this.addAttendanceForm.value + "from onSubmit of add dhelp attendance component")
    const formValue = this.addAttendanceForm.value;
    const data: any = {
      "attended": true,
      "dateOfAttendance": formValue.dateOfAttendance,
      "inTime": formValue.inTime,
      "outTime": formValue.outTime,
      "updatedByGuardId": Number(sessionStorage.getItem('id'))
    };

    this.service.addDhelpAttendance(this.id, data).subscribe(
      (data: any) => {
        this.toastr.success('Successfully Added');
        this.attendance = data;
        this.router.navigate(['flatDetails'])
      },
      (err: any) => {
        this.toastr.error('Failed to Add DomesticHelp Attendance Details: Invalid Status');
        console.log(err)
      }
    )
  }
}
