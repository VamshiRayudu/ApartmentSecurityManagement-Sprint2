import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service: SecurityAlertService, private router: Router) { }

  ngOnInit(): void {
    var role = sessionStorage.getItem('role')
    if (role == "ADMIN") {
      this.isAdmin = true;
    }
    else if (role == "GUARD") {
      this.isGuard = true;
    }
    this.service.getAllSecurityAlerts().subscribe(
      (data) => this.securityalerts = data,
      (err) => console.log(err)
    );
  }

  onEdit(securityalert: SecurityAlert) {
    this.router.navigate(['edit-securityalert', securityalert.id])
  }


  addSecurityAlert() {
    this.router.navigate(['add-securityalert']);

  }
}
