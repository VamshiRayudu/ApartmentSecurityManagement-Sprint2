import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityAlertService } from '../shared/securityalertservice';
import { SecurityAlert } from './securityalert';

@Component({
  selector: 'app-securityalert',
  templateUrl: './securityalert.component.html',
  styleUrls: ['./securityalert.component.css']
})
export class SecurityalertComponent implements OnInit {

  securityalert!: SecurityAlert;
  id: number = 0;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private router: Router,
    private service: SecurityAlertService) { }


  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.service.getSecurityAlertById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.securityalert = data
      },
      (err) => console.log(err)
    );

  }

  onBack() {

    this.router.navigate(['securityalerts']);
  }

}
