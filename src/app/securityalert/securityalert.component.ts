import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private service: SecurityAlertService,private toastr: ToastrService) { }


  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.service.getSecurityAlertById(this.id).subscribe(
      (data) => {
        this.toastr.success('Successfully Fetched');
        console.log(data);
        this.securityalert = data
      },
      (err) => {
        this.toastr.error('Failed to Fetch Data');
        console.log(err)
      }
    );

  }

  onBack() {

    this.router.navigate(['securityalerts']);
  }

}
