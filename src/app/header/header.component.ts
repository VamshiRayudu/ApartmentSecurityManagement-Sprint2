import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAdmin: boolean = false;
  public isGuard: boolean = false;
  public isOwner: boolean = false;

  constructor(private router: Router, public loginservice: AuthenticationService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('role') == "ADMIN") {
      this.isAdmin = true;
    }
    else if (sessionStorage.getItem('role') == "GUARD") {
      this.isGuard = true;
    }
    if (sessionStorage.getItem('role') == "FLATOWNER") {
      this.isOwner = true;
    }
  }

  /**
   * Login
   */
  checkLogin() {
    this.router.navigate(['login'])
  }

  /**
   * Logout
   */
  checkLogout() {
    this.loginservice.logOut();
    this.toastr.success('Logout Successful');
    this.router.navigate(['']);
  }

  /**
   * View Admins
   */
  listAdmins() {
    this.router.navigate(['admins']);
  }

  /**
   * View Guards
   */
  listGuards() {
    this.router.navigate(['guards']);
  }

  /**
   * View Flat Owners
   */
  listFlatOwners() {
    this.router.navigate(['owners']);
  }

  /**
   * View Flat Details
   */
  listFlatDetails() {
    this.router.navigate(['flatDetails']);
  }

  /**
   * View Vehicles
   */
  listVehicles() {
    this.router.navigate(['vehicles']);
  }

  /**
   * View Security Alerts
   */
  listSecurityAlerts() {
    this.router.navigate(['securityalerts']);
  }

  /**
   * Admin Home Page
   */
  adminHomePage() {
    this.router.navigate(['admin-home']);
  }

  /**
   * Owner Home Page
   */
  ownerHomePage() {
    this.router.navigate(['owner-home']);
  }

  /***
   * Guard Home Page
   */
  guardHomePage() {
    this.router.navigate(['guard-home']);
  }

}
