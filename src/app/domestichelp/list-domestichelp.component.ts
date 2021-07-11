import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DomesticHelpService } from '../shared/domesticHelpService';
import { DomesticHelp } from './domesticHelp';

@Component({
  selector: 'app-list-domestichelp',
  templateUrl: './list-domestichelp.component.html',
  styleUrls: ['./list-domestichelp.component.css']
})
export class ListDomestichelpComponent implements OnInit {

  dHelps!: DomesticHelp[];

  private error!: string;
  private id: number = 0;
  public isOwner: boolean = false;
  public isAdmin: boolean = false;
  public isGuard: boolean = false;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private router: Router, private service: DomesticHelpService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    var role = sessionStorage.getItem('role')
    if (role == "ADMIN") {
      this.service.getDomesticHelpByFlatId(this.id).subscribe(
        (data: DomesticHelp[]) => {
          this.toastr.success('Successfully Fetched');
          console.log(data);
          this.dHelps = data;
        },
        (err: any) => {
          this.toastr.error('Failed to Fetch DomesticHelp Details: Invalid Status');
          console.log(err)
        }
      )
      this.isAdmin = true;
    }
    else if (role == "FLATOWNER") {
      this.service.getDomesticHelpByFlatId(this.id).subscribe(
        (data: DomesticHelp[]) => {
          this.toastr.success('Successfully Fetched');
          console.log(data);
          this.dHelps = data;
        },
        (err: any) => {
          this.toastr.error('Failed to Fetch DomesticHelp Details: Invalid Status');
          console.log(err)
        }
      )
      this.isOwner = true;
    }
    else if (role == "GUARD") {
      this.service.getDomesticHelpByFlatId(this.id).subscribe(
        (data: DomesticHelp[]) => {
          this.toastr.success('Successfully Fetched');
          console.log(data);
          this.dHelps = data;
        },
        (err: any) => {
          this.toastr.error('Failed to Fetch DomesticHelp Details: Invalid Status');
          console.log(err)
        }
      )
      this.isGuard = true;
    }
  }



  /**
   * Add Dhelp Attendance Button
   * @param dHelp
   */
  addDHelpAttendance(dHelp: DomesticHelp) {
    this.router.navigate(['add-Dhelp-attendance', dHelp.id])
  }

  /**
   * View Dhelp Attendance
   * @param dHelp 
   */
  viewDHelpAttendance(dHelp: DomesticHelp) {
    this.router.navigate(['list-Dhelp-attendance', dHelp.id])
  }

  /**
   * On Edit Button
   * @param dHelp 
   */
  onEdit(dHelp: DomesticHelp) {
    this.router.navigate(['edit-domestichelp', dHelp.id])
  }

  /**
   * on Back Button
   */
  onBack() {
    this.router.navigate(['flatDetails']);
  }

}
