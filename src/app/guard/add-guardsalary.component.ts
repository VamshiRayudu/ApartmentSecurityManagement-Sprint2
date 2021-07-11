import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GuardService } from '../shared/guardservice';
import { Guard } from './guard';
import { GuardSalary } from './guardsalary';

@Component({
  selector: 'app-add-guardsalary',
  templateUrl: './add-guardsalary.component.html',
  styleUrls: ['./add-guardsalary.component.css']
})
export class AddGuardsalaryComponent implements OnInit {

  statusData: any = ['PENDING', 'CREDITED']
  guardsalary!: GuardSalary;
  guard!: Guard;
  id: number = 0;
  addSalaryForm!: FormGroup;

  submitted = false;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: GuardService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

    this.service.getGuardById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.guard = data;
        this.addSalaryForm = this.formBuilder.group({
          id: this.guard.id,
          dateofPayment: ['', Validators.required],
          amount: ['', Validators.required],
          salaryStatus: ''
        })
      },
      (err) => console.log(err)
    );
  }

   /**
   * Form Validation
   */
  get f() {
    return this.addSalaryForm.controls;
  }

  /**
   * On Submit Button
   * @returns GuardSalary
   */
  onSubmit() {
    this.submitted = true;
    if (this.addSalaryForm.invalid) {
      return;
    }
    console.log(this.addSalaryForm.value + "from onSubmit of add salary component")

    this.service.addGuardSalary(this.id, this.addSalaryForm.value).subscribe(
      (data: any) => {
        this.toastr.success('Successfully Added');
        this.guardsalary = data;
        this.router.navigate(['guards'])
      },
      (err: any) => {
        this.toastr.error('Failed to Add Guard Salary Details: Invalid Status');
        console.log(err)
      }
    )
  }
}
