import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GuardService } from '../shared/guardservice';
import { Guard } from './guard';
import { GuardSalary } from './guardsalary';

@Component({
  selector: 'app-list-guard',
  templateUrl: './list-guard.component.html',
  styleUrls: ['./list-guard.component.css']
})
export class ListGuardComponent implements OnInit {

  guards!: Guard[];

  constructor(private service: GuardService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getAllGuards().subscribe(
      (data) => {
        // this.toastr.success('Successfully Fetched');
        this.guards = data;
      },
      (err) => {
        this.toastr.error('Failed to Fetch Guard Details: Invalid Status');
        console.log(err)
      }
    );

  }

  onEdit(guard: Guard) {

    this.router.navigate(['edit-guard', guard.id])


  }
  onDelete(guard: Guard) {

    this.service.deleteGuardById(guard.id).subscribe(
      (data) => {
        this.toastr.success('Successfully Deleted');
        console.log('user deleted');
        this.guards = this.guards.filter(
          gua => gua !== guard
        )
        this.router.navigate(['admin-home']);
      },
      (err) => {
        // this.toastr.error('Failed to Delete');
        console.log(err)
      }

    );
  }

  addGuard() {
    this.router.navigate(['register']);
  }

  addGuardSalary(guard: Guard) {
    this.router.navigate(['add-guardsalary', guard.id])
  }

  listGuardSalary(guard: Guard) {
    this.router.navigate(['list-guardsalaries', guard.id])
  }

  addGuardShift(guard: Guard) {
    this.router.navigate(['add-guardshift', guard.id])
  }

  viewGuardShift(guard: Guard) {
    this.router.navigate(['view-guardshift', guard.id])
  }

  viewGuardAttendance(guard: Guard) {
    this.router.navigate(['list-guardattendance', guard.id])
  }
}
