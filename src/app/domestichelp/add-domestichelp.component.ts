import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FlatDetails } from '../flatdetails/flatdetails';
import { DomesticHelpService } from '../shared/domesticHelpService';
import { DomesticHelp } from './domesticHelp';

@Component({
  selector: 'app-add-domestichelp',
  templateUrl: './add-domestichelp.component.html',
  styleUrls: ['./add-domestichelp.component.css']
})
export class AddDomestichelpComponent implements OnInit {

  dhelpTypeData: any[] = ['COOKING', 'PLUMBING', 'ELECTRICITY', 'HOUSEKEEPING', 'WASHING']
  dHelp!: DomesticHelp;
  id: number = 0;
  addDHelpForm!: FormGroup;
  // flatDetails!: FlatDetails;
  // owner!: Owner;

  submitted= false;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder, private service: DomesticHelpService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.addDHelpForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobileNumber: ['', [Validators.required,Validators.minLength(10)]],
      helpType: '',
      aadharId: ['', [Validators.required,Validators.minLength(12)]]
    })
  }

  get f() {
    return this.addDHelpForm.controls ;
  }

  onSubmit() {
    this.submitted = true;
    if(this.addDHelpForm.invalid) 
    {
      return ;
    }
    console.log(this.addDHelpForm.value + "from onSubmit of add customer component")
    console.log(this.addDHelpForm.value.flatNumber);
    const formValue = this.addDHelpForm.value;
    this.service.addDomesticHelp(Number(this.id), this.addDHelpForm.value).subscribe(
      data => {
        this.toastr.success('Successfully Added');
        this.dHelp = data;
        this.router.navigate(['flatDetails'])
      },
      err => {
        this.toastr.error('Failed to Add DomesticHelp Details: Invalid Status');
        console.log(err)
      }
    )
  }
}
