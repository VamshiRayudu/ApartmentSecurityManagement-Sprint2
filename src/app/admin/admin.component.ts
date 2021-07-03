import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../shared/adminservice';
import { Admin } from './admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin!: Admin;
  id: number = 0;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private router: Router,
    private service: AdminService) { }


  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.service.getAdminById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.admin = data
      },
      (err) => console.log(err)
    );

  }

  onBack() {
    this.router.navigate(['admins']);
  }


}
