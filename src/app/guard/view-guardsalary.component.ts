import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardService } from '../shared/guardservice';
import { GuardSalary } from './guardsalary';

@Component({
  selector: 'app-view-guardsalary',
  templateUrl: './view-guardsalary.component.html',
  styleUrls: ['./view-guardsalary.component.css']
})
export class ViewGuardsalaryComponent implements OnInit {

  guardsalaries!: GuardSalary[];
  private error!: string;
  private id: number = 0;
  private numberPlate: string = "";


  constructor(private _ActivatedRoute: ActivatedRoute, private router: Router, private service: GuardService) {

  }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.service.getGuardSalaryByGuardId(this.id).subscribe(
      (data) => {
        console.log(data);
        this.guardsalaries = data;
      },
      (err) => console.log(err)
    );
  }

  onBack() {
    this.router.navigate(['guards']);
  }
}
