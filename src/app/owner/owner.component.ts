import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from '../shared/ownerservice';
import { Owner } from './owner';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  owner!: Owner;
  id: number = 0;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private router: Router,
    private service: OwnerService) { }


  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.service.getOwnerById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.owner = data
      },
      (err) => console.log(err)
    );

  }

  onBack() {
    this.router.navigate(['owners']);
  }

}
