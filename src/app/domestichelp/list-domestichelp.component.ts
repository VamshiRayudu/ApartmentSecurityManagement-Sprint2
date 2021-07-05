import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router, private service: DomesticHelpService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    var role = sessionStorage.getItem('role')
    if (role == "ADMIN") {
      this.service.getDomesticHelpByFlatId(this.id).subscribe(
        (data: DomesticHelp[]) => {
          console.log(data);
          this.dHelps = data;
        },
        (err: any) => console.log(err)
      )
      this.isAdmin = true;
    }
    else if (role == "OWNER") {
      this.service.getDomesticHelpByFlatId(this.id).subscribe(
        (data: DomesticHelp[]) => {
          console.log(data);
          this.dHelps = data;
        },
        (err: any) => console.log(err)
      )
      this.isOwner = true;
    }
    else if (role == "GUARD") {
      this.service.getDomesticHelpByFlatId(this.id).subscribe(
        (data: DomesticHelp[]) => {
          console.log(data);
          this.dHelps = data;
        },
        (err: any) => console.log(err)
      )
      this.isGuard = true;
    }
  }



  addDHelpAttendance(dHelp: DomesticHelp) {
    this.router.navigate(['add-Dhelp-attendance', dHelp.id])
  }

  viewDHelpAttendance(dHelp: DomesticHelp) {
    this.router.navigate(['list-Dhelp-attendance', dHelp.id])
  }

  onEdit(dHelp: DomesticHelp) {
    this.router.navigate(['edit-domestichelp', dHelp.id])
  }

}
