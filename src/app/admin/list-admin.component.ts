import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../shared/adminservice';
import { Admin } from './admin';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  admins!: Admin[];
  public isAdmin: boolean = false;

  constructor(private service: AdminService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getAllAdmins().subscribe(
      (data) => {
      // this.toastr.success('Successfully Fetched');
      this.admins = data;
      },
      (err) => {
        this.toastr.error('Failed to Fetch Data');
        console.log(err)
      }
    );
    if(sessionStorage.getItem('role') == "ADMIN")
    {
      this.isAdmin=true;
    }

  }

  onEdit(admin: Admin) {

    this.router.navigate(['edit-admin', admin.id])


  }
  onDelete(admin: Admin) {

    this.service.deleteAdminById(admin.id).subscribe(
      (data) => {
        this.toastr.success('Successfully Deleted');
        console.log('user deleted');
        this.admins = this.admins.filter(
          adm => adm !== admin
        )
      },
      (err) =>{
        this.toastr.error('Failed to Delete');
        console.log(err)
      }
    );
  }

  addAdmin() {
    this.router.navigate(['register']);
  }
}
