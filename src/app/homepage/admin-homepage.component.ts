import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin/admin';
import { AdminService } from '../shared/adminservice';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

  admin!: Admin;
  id: number = 0;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private router: Router,
    private service: AdminService) { }


  ngOnInit(): void {
    this.id = Number(sessionStorage.getItem('id'));

    this.service.getAdminById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.admin = data
      },
      (err) => console.log(err)
    );

  }

  onEdit(admin: Admin) {

    this.router.navigate(['edit-admin', admin.id])


  }

  updatePassword() {
    this.router.navigate(['updatePassword'])
  }

}
