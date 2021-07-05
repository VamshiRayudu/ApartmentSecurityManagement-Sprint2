import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomesticHelpService } from '../shared/domesticHelpService';
import { DomesticHelp } from './domesticHelp';

@Component({
  selector: 'app-domestichelp',
  templateUrl: './domestichelp.component.html',
  styleUrls: ['./domestichelp.component.css']
})
export class DomestichelpComponent implements OnInit {

  domesticHelp!: DomesticHelp;
  id: number = 0

  constructor(private _ActivatedRoute: ActivatedRoute, private router: Router, private service: DomesticHelpService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.service.getDomesticHelpById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.domesticHelp = data;
      },
      (err) => console.log(err)
    );
  }

  onBack() {
    this.router.navigate(['dHelps']);
  }

}
