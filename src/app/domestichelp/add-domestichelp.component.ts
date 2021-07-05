import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlatDetails } from '../flatdetails/flatdetails';
import { DomesticHelpService } from '../shared/domesticHelpService';
import { DomesticHelp } from './domesticHelp';

@Component({
  selector: 'app-add-domestichelp',
  templateUrl: './add-domestichelp.component.html',
  styleUrls: ['./add-domestichelp.component.css']
})
export class AddDomestichelpComponent implements OnInit {

  dHelp!: DomesticHelp;
  id: number = 0;
  addDHelpForm!: FormGroup;
  // flatDetails!: FlatDetails;
  // owner!: Owner;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder, private service: DomesticHelpService) { }

  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    this.addDHelpForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      helpType: ['', Validators.required],
      aadharId: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.addDHelpForm.value + "from onSubmit of add customer component")
    console.log(this.addDHelpForm.value.flatNumber);
    const formValue = this.addDHelpForm.value;
    this.service.addDomesticHelp(Number(this.id), this.addDHelpForm.value).subscribe(
      data => {
        this.dHelp = data;
        this.router.navigate(['flatDetails'])
      },
      err => console.log(err)
    )
  }
}
