import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-sample',
  templateUrl: './reactive-sample.component.html',
  styleUrls: ['./reactive-sample.component.css']
})
export class ReactiveSampleComponent implements OnInit {

  states: Array<string> = ['UP', 'MP', 'AP'];
  user = {'fname':'Bob','lname':'Jack'}

  // define the form first---
  reactiveForm !: FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {

    // console.log('initial value---',this.user);
    

    this.reactiveForm = this._fb.group({
      firstName: [null,[Validators.required,Validators.minLength(2)]],
      lastName: [null,Validators.required],
      address: this._fb.group({
        addressType: [null,Validators.required],
        expiryDate: [],
        streetAddress: [null,Validators.required],
        city: [null, Validators.required],
        state: [null,Validators.required],
        zipcode:[null,[Validators.required,Validators.pattern('^[0-9]{5}$')]]
        
      })
    })

  }

  // this function is used for getting the access of controlName.
  get zipcode() {
    return this.reactiveForm.controls['address'].get('zipcode');
  }

  submitHandler() {
    console.log(this.reactiveForm);
    // console.log('final value---',this.user);
    
  }

}
