import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GuardService } from '../shared/guardservice';
import { GuardShift } from './guardshift';

@Component({
  selector: 'app-view-guardshift',
  templateUrl: './view-guardshift.component.html',
  styleUrls: ['./view-guardshift.component.css']
})
export class ViewGuardshiftComponent implements OnInit {

  guardshift!: GuardShift;
  private error!: string;
  private id: number = 0;
  private numberPlate: string = "";


  constructor(private _ActivatedRoute: ActivatedRoute, private router: Router, private service: GuardService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.service.getGuardShiftByGuardId(this.id).subscribe(
      (data) => {
        this.toastr.success('Successfully Fetched');
        console.log(data);
        this.guardshift = data;
      },
      (err) => {
        this.toastr.error('Failed to Fetch Guard Shift Details: Invalid Status');
        console.log(err)
      }
    );
  }

  /**
   * View Guard Shift
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
