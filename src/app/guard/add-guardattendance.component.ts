import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private _ActivatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AttendanceService) { }

  ngOnInit(): void {
    this.addAttendanceForm = this.formBuilder.group({
      dateOfAttendance: ['', Validators.required],
      inTime: ['', Validators.required],
      outTime: ['', Validators.required]
    })
  }

  onSubmit() {
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
        this.attendance = data;
        this.router.navigate(['guard'])
      },
      (err: any) => console.log(err)
    )
  }
}
