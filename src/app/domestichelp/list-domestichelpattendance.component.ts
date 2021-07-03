import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  

  constructor(private _ActivatedRoute: ActivatedRoute, private router: Router, private service: AttendanceService) {

  }

ngOnInit(): void {
  this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
      this.service.getAttendanceByDhelpId(this.id).subscribe(
          (data) => {
              console.log(data);
              this.attendances = data;
          },
          (err) => console.log(err)
      );
}

onBack(){
  this.router.navigate(['dhelp-list']);
}

}
