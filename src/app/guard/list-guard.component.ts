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

  /**
   * On Edit Button
   * @param guard
   */
  onEdit(guard: Guard) {

    this.router.navigate(['edit-guard', guard.id])
  }

  /**
   * On Delete Button
   * @param guard 
   */
  onDelete(guard: Guard) {

    this.service.deleteGuardById(guard.id).subscribe(
      (data) => {
        this.toastr.success('Successfully Deleted');
        console.log('user deleted');
        this.guards = this.guards.filter(
          gua => gua !== guard
        ),
          this.router.navigate(['guards']);
      },
      (err) => {
        this.toastr.error('Failed to Delete');
        console.log(err)
      }

    );
  }

  /**
   * Add Guard Button
   */
  addGuard() {
    this.router.navigate(['register']);
  }

  /**
   * Add Guard Salary Button
   * @param guard 
   */
  addGuardSalary(guard: Guard) {
    this.router.navigate(['add-guardsalary', guard.id])
  }

  /**
   * List Guard Salary Button
   * @param guard 
   */
  listGuardSalary(guard: Guard) {
    this.router.navigate(['list-guardsalaries', guard.id])
  }

  /**
   * Add Guard Shift Button
   * @param guard 
   */
  addGuardShift(guard: Guard) {
    this.router.navigate(['add-guardshift', guard.id])
  }

  /**
   * View Guard Shift Button
   * @param guard 
   */
  viewGuardShift(guard: Guard) {
    this.router.navigate(['view-guardshift', guard.id])
  }

  /**
   * View Guard Salary Button
   * @param guard 
   */
  viewGuardAttendance(guard: Guard) {
    this.router.navigate(['list-guardattendance', guard.id])
  }
}
