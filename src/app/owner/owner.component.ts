import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private service: OwnerService, private toastr: ToastrService) { }


  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.service.getOwnerById(this.id).subscribe(
      (data) => {
        this.toastr.success('Successfully Fetched');
        console.log(data);
        this.owner = data
      },
      (err) => {
        this.toastr.error('Failed to Fetch Data');
        console.log(err)
      }
    );

  }

  /**
   * On Back Button
   */
  onBack() {
    this.router.navigate(['owners']);
  }

}
