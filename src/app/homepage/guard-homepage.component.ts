import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guard } from '../guard/guard';
import { GuardService } from '../shared/guardservice';

@Component({
  selector: 'app-guard-homepage',
  templateUrl: './guard-homepage.component.html',
  styleUrls: ['./guard-homepage.component.css']
})
export class GuardHomepageComponent implements OnInit {

  guard!: Guard;
  id: number = 0;

  constructor(
    private router: Router,
    private service: GuardService) { }


  ngOnInit(): void {
    this.id = Number(sessionStorage.getItem('id'));

    this.service.getGuardById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.guard = data
      },
      (err) => console.log(err)
    );

  }

  /**
   * Add Attendance
   */
  addAttendance() {
    this.router.navigate(['add-guard-attendance'])
  }

  /**
   * View Attendance
   * @param guard
   */
  viewAttendance(guard: Guard) {
    this.router.navigate(['list-guardattendance', guard.id])
  }

  /**
   * View Shift
   * @param guard
   */
  viewShift(guard: Guard) {
    this.router.navigate(['view-guardshift', guard.id])
  }

  /**
   * View Salary
   * @param guard
   */
  viewSalary(guard: Guard) {
    this.router.navigate(['list-guardsalaries', guard.id])
  }

  /**
   * Update Password
   */
  updatePassword() {
    this.router.navigate(['updatePassword'])
  }
}
