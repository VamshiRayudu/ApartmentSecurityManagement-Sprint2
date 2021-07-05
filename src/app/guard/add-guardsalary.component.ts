import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardService } from '../shared/guardservice';
import { Guard } from './guard';
import { GuardSalary } from './guardsalary';

@Component({
  selector: 'app-add-guardsalary',
  templateUrl: './add-guardsalary.component.html',
  styleUrls: ['./add-guardsalary.component.css']
})
export class AddGuardsalaryComponent implements OnInit {

  guardsalary!: GuardSalary;
  guard!:Guard;
  id: number = 0;
  addSalaryForm!: FormGroup;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: GuardService) { }

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
          salaryStatus: ['', Validators.required]
        })
      },
      (err) => console.log(err)
    );
  }

  onSubmit() {
    console.log(this.addSalaryForm.value + "from onSubmit of add salary component")

    this.service.addGuardSalary(this.id,this.addSalaryForm.value).subscribe(
      (        data: any) => {this.guardsalary = data;
            this.router.navigate(['guards'])},
      (        err: any) => console.log(err)
    )
  }
}
