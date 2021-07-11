import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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


  constructor(private _ActivatedRoute: ActivatedRoute, private router: Router, private service: AttendanceService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.service.getAttendanceByGuardId(this.id).subscribe(
      (data) => {
        this.toastr.success('Successfully Fetched');
        console.log(data);
        this.attendances = data;
      },
      (err) => {
        this.toastr.error('Failed to Fetch Guard Attendance Details: Invalid Status');
        console.log(err)
      }
    );
  }

  /**
   * On Back Button
   */
  onBack() {
    if (sessionStorage.getItem('role') == "ADMIN") {
      this.router.navigate(['guards']);
    }
    else if (sessionStorage.getItem('role') == "GUARD") {
      this.router.navigate(['guard-home']);
    }
  }

}
