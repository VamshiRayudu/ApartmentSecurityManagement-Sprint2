import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAdmin: boolean=false;
  public isGuard: boolean=false;
  public isOwner: boolean=false;

  constructor(private router: Router,public loginservice: AuthenticationService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('role') == "ADMIN")
    {
      this.isAdmin=true;
    }
    else if(sessionStorage.getItem('role') == "GUARD")
    {
      this.isGuard=true;
    }
    if(sessionStorage.getItem('role') == "FLATOWNER")
    {
      this.isOwner=true;
    }
  }

  checkLogin() {
    this.router.navigate(['login'])
  }

  checkLogout() {
    this.loginservice.logOut();
    this.router.navigate(['']);
    
  }

  listAdmins() {
    this.router.navigate(['admins']);
  }

  listGuards() {
    this.router.navigate(['guards']);
  }

  listFlatOwners() {
    this.router.navigate(['owners']);
  }

  listFlatDetails() {
    this.router.navigate(['flatDetails']);
  }

  listVehicles() {
    this.router.navigate(['vehicles']);
  }

  listSecurityAlerts() {
    this.router.navigate(['securityalerts']);
  }

  adminHomePage() {
    this.router.navigate(['admin-home']);
  }

  ownerHomePage() {
    this.router.navigate(['owner-home']);
  }

  guardHomePage() {
    this.router.navigate(['guard-home']);
  }

}
