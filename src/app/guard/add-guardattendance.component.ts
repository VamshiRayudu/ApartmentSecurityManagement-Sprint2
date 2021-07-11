import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Attendance } from '../domestichelp/attendance';
import { AttendanceService } from '../shared/attendanceservice';

@Component({
  selector: 'app-add-guardattendance',
  templateUrl: './add-guardattendance.component.html',
  styleUrls: ['./add-guardattendance.component.css']
})
export class AddGuardattendanceComponent implements OnInit {


  attendance!: Attendance;
  id: number = 0;
  addAttendanceForm!: FormGroup;

  submitted = false;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AttendanceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.addAttendanceForm = this.formBuilder.group({
      dateOfAttendance: ['', Validators.required],
      inTime: ['', Validators.required],
      outTime: ['', Validators.required]
    })
  }

  /**
   * Form Validation
   */
  get f() {
    return this.addAttendanceForm.controls;
  }

  /**
   * On Submit Button
   * @returns Attendance
   */
  onSubmit() {
    this.submitted = true;
    if (this.addAttendanceForm.invalid) {
      return;
    }
    console.log(this.addAttendanceForm.value + "from onSubmit of add dhelp attendance component")
    console.log(this.addAttendanceForm.value.inTime + "from onSubmit of add dhelp attendance component")
    const formValue = this.addAttendanceForm.value;
    const data: any = {
      "attended": true,
      "dateOfAttendance": formValue.dateOfAttendance,
      "inTime": formValue.inTime,
      "outTime": formValue.outTime,
      "updatedByGuardId": Number(sessionStorage.getItem('id'))
    };

    console.log(data);
    this.service.addGuardAttendance(Number(sessionStorage.getItem('id')), data).subscribe(
      (data: any) => {
        this.toastr.success('Successfully Added');
        this.attendance = data;
        this.router.navigate(['guard-home'])
      },
      (err: any) => {
        this.toastr.error('Failed to Add Guard Attendance Details: Invalid Status');
        console.log(err)
      }
    )
  }
}
