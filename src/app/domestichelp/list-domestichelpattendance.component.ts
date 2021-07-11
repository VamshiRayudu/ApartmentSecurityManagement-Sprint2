import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AttendanceService } from '../shared/attendanceservice';
import { Attendance } from './attendance';

@Component({
  selector: 'app-list-domestichelpattendance',
  templateUrl: './list-domestichelpattendance.component.html',
  styleUrls: ['./list-domestichelpattendance.component.css']
})
export class ListDomestichelpattendanceComponent implements OnInit {

  attendances!: Attendance[];
  private id: number = 0;
  private numberPlate: string = "";


  constructor(private _ActivatedRoute: ActivatedRoute, private router: Router, private service: AttendanceService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.service.getAttendanceByDhelpId(this.id).subscribe(
      (data) => {
        this.toastr.success('Successfully Fetched');
        console.log(data);
        this.attendances = data;
      },
      (err) => {
        this.toastr.error('Failed to Fetch DomesticHelp Attendance Details: Invalid Status');
        console.log(err)
      }
    );
  }

  /**
   * On Back Button
   */
  onBack() {
    this.router.navigate(['flatDetails']);
  }

}
