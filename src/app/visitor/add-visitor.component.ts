import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VisitorService } from '../shared/visitorService';
import { Visitor } from './visitor';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit {

  visitor!: Visitor;
  id: number = 0;
  addVisitorForm!: FormGroup;

  submitted = false;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder, private service: VisitorService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.addVisitorForm = this.formBuilder.group({
      visitorName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      inTime: ['', Validators.required]
      // outTime: ['', Validators.required]
    })
  }

  /**
   * Form Validation
   */
  get f() {
    return this.addVisitorForm.controls;
  }

  /**
   * On Submit Button
   * @returns 
   */
  onSubmit() {
    this.submitted = true;
    if (this.addVisitorForm.invalid) {
      console.log(this.addVisitorForm.value);
      return;
    }
    console.log(this.addVisitorForm.value + "from onSubmit of add visitor component")
    const formValue = this.addVisitorForm.value;
    const data: any = {
      "flatDetails": {
        "flatNumber": this.id
      },
      "inTime": formValue.inTime,

      "outTime": "",

      "mobileNumber": formValue.mobileNumber,

      "visitorName": formValue.visitorName,

    };
    this.service.addVisitor(data, Number(sessionStorage.getItem('id'))).subscribe(
      (data: Visitor) => {
        this.toastr.success('Successfully Added');
        this.visitor = data;
        this.router.navigate(['flatDetails'])
      },
      (err: any) => {
        this.toastr.error('Failed to Add Visitor Details: Invalid Status');
        console.log(err)
      }
    )
  }


}
