import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SecurityAlertService } from '../shared/securityalertservice';
import { SecurityAlert } from './securityalert';

@Component({
  selector: 'app-list-securityalert',
  templateUrl: './list-securityalert.component.html',
  styleUrls: ['./list-securityalert.component.css']
})
export class ListSecurityalertComponent implements OnInit {

  securityalerts!: SecurityAlert[];

  private error!: string;
  private id: number = 0;
  public isOwner: boolean = false;
  public isAdmin: boolean = false;
  public isGuard: boolean = false;

  constructor(private service: SecurityAlertService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    var role = sessionStorage.getItem('role')
    if (role == "ADMIN") {
      this.isAdmin = true;
    }
    else if (role == "GUARD") {
      this.isGuard = true;
    }
    this.service.getAllSecurityAlerts().subscribe(
      (data) => {
        // this.toastr.success('Successfully Fetched');
        this.securityalerts = data;
      },
      (err) => {
        this.toastr.error('Failed to Fetch Security Alert Details: Invalid Status');
        console.log(err)
      }
    );
  }

  /**
   * On Edit Button
   * @param securityalert 
   */
  onEdit(securityalert: SecurityAlert) {
    this.router.navigate(['edit-securityalert', securityalert.id])
  }

  /**
   * Add Security Alert Button
   */
  addSecurityAlert() {
    this.router.navigate(['add-securityalert']);

  }
}
