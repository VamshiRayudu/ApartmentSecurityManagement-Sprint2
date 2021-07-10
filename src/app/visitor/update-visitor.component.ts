import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VisitorService } from '../shared/visitorService';
import { Visitor } from './visitor';

@Component({
  selector: 'app-update-visitor',
  templateUrl: './update-visitor.component.html',
  styleUrls: ['./update-visitor.component.css']
})
export class UpdateVisitorComponent implements OnInit {

  visitor!: Visitor;
  id: number = 0;
  updateVisitorForm!: FormGroup;

  submitted= false;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder, private service: VisitorService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.service.getVisitorById(this.id).subscribe(
      (data: Visitor) => {
        console.log(data);
        this.visitor = data;
        this.updateVisitorForm = this.formBuilder.group({
          outTime: ['', Validators.required]
        })
      },
      (err: any) => console.log(err)
    );
  }

  get f() {
    return this.updateVisitorForm.controls ;
  }

  onSubmit() {
    this.submitted = true;
    if(this.updateVisitorForm.invalid) 
    {
      console.log(this.updateVisitorForm.value);
      return ;
    }
    console.log(this.updateVisitorForm.value + "from onSubmit of update visitor component")
    const formValue = this.updateVisitorForm.value;
    const data: any = {
      "id": this.visitor.id,

      "inTime": this.visitor.inTime,

      "outTime": formValue.outTime,

      "mobileNumber": this.visitor.mobileNumber,

      "visitorName": this.visitor.visitorName,

    };
    this.service.updateVisitor(data, Number(sessionStorage.getItem('id'))).subscribe(
      (data: Visitor) => {
        this.toastr.success('Successfully Updated');
        this.visitor = data;
        this.router.navigate(['flatDetails'])
      },
      (err: any) => {
        this.toastr.error('Failed to Update Visitor Details: Invalid Status');
        console.log(err)
      }
    )
  }

}
