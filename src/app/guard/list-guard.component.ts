import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service: GuardService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAllGuards().subscribe(
      (data) => this.guards = data,
      (err) => console.log(err)
    );

  }

  onEdit(guard: Guard) {

    this.router.navigate(['edit-guard', guard.id])


  }
  onDelete(guard: Guard) {

    this.service.deleteGuardById(guard.id).subscribe(
      (data) => {
        console.log('user deleted');
        this.guards = this.guards.filter(
          gua => gua !== guard
        )
      },
      (err) => console.log(err)

    );
  }

  addGuard() {
    this.router.navigate(['register']);
  }

  addGuardSalary(guard: Guard) {
    this.router.navigate(['add-guardsalary',guard.id])
  }
  
  listGuardSalary(guard: Guard) {
    this.router.navigate(['list-guardsalaries',guard.id])
  }

  addGuardShift(guard: Guard) {
    this.router.navigate(['add-guardshift',guard.id])
  }
  
  viewGuardShift(guard: Guard) {
    this.router.navigate(['view-guardshift',guard.id])
  }

  viewGuardAttendance(guard: Guard) {
    this.router.navigate(['list-guardattendance',guard.id])
  }
}
