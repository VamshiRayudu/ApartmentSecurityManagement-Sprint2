import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardService } from '../shared/guardservice';
import { Guard } from './guard';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.css']
})
export class GuardComponent implements OnInit {

  guard!: Guard;
  id: number = 0;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private router: Router,
    private service: GuardService) { }


  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.service.getGuardById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.guard = data
      },
      (err) => console.log(err)
    );

  }

  onBack() {
    this.router.navigate(['guards']);
  }


}
