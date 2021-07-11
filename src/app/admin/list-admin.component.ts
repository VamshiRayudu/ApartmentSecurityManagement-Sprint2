import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../shared/adminservice';
import { AuthenticationService } from '../shared/authentication.service';
import { Admin } from './admin';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  admins!: Admin[];
  public isAdmin: boolean = false;

  constructor(private service: AdminService, private router: Router, private toastr: ToastrService,
    private authService: AuthenticationService) { }

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
    if (sessionStorage.getItem('role') == "ADMIN") {
      this.isAdmin = true;
    }

  }

  /**
   * on Edit Admin
   * @param admin
   */
  onEdit(admin: Admin) {

    this.router.navigate(['edit-admin', admin.id])
  }

  /**
   * Delete Admin Button
   * @param admin 
   */
  onDelete(admin: Admin) {

    this.service.deleteAdminById(admin.id).subscribe(
      (data) => {
        this.toastr.success('Successfully Deleted');
        console.log('user deleted');
        this.admins = this.admins.filter(
          adm => adm !== admin
        )
        if (admin.id == Number(sessionStorage.getItem('id'))) {
          this.authService.logOut();
          this.router.navigate(['']);
        }
        else {
          this.router.navigate(['admin-home'])
        }
      },
      (err) => {
        this.toastr.error('Failed to Delete');
        console.log(err)
      }
    );
  }

  /**
   * Add Admin Button
   */
  addAdmin() {
    this.router.navigate(['register']);
  }
}