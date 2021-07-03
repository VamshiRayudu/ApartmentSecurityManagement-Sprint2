import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attendance } from '../domestichelp/attendance';
import { AttendanceService } from '../shared/attendanceservice';

@Component({
  selector: 'app-list-guardattendance',
  templateUrl: './list-guardattendance.component.html',
  styleUrls: ['./list-guardattendance.component.css']
})
export class ListGuardattendanceComponent implements OnInit {
  attendances!: Attendance[];
  private id: number = 0;
  private numberPlate: string = "";


  constructor(private _ActivatedRoute: ActivatedRoute, private router: Router, private service: AttendanceService) {

  }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.service.getAttendanceByGuardId(this.id).subscribe(
      (data) => {
        console.log(data);
        this.attendances = data;
      },
      (err) => console.log(err)
    );
  }

  onBack() {
    this.router.navigate(['guards']);
  }

}
