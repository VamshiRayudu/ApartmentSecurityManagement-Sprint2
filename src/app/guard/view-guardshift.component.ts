import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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


  constructor(private _ActivatedRoute: ActivatedRoute, private router: Router, private service: GuardService) {

  }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.service.getGuardShiftByGuardId(this.id).subscribe(
      (data) => {
        console.log(data);
        this.guardshift = data;
      },
      (err) => console.log(err)
    );
  }

  onBack() {
    this.router.navigate(['guards']);
  }

}
