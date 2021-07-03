import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../shared/adminservice';
import { Admin } from './admin';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  admins!: Admin[];

  constructor(private service: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAllAdmins().subscribe(
      (data) => this.admins = data,
      (err) => console.log(err)
    );

  }

  onEdit(admin: Admin) {

    this.router.navigate(['edit-admin', admin.id])


  }
  onDelete(admin: Admin) {

    this.service.deleteAdminById(admin.id).subscribe(
      (data) => {
        console.log('user deleted');
        this.admins = this.admins.filter(
          adm => adm !== admin
        )
      },
      (err) => console.log(err)

    );
  }

  addAdmin() {
    this.router.navigate(['register']);
  }
}
