import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css'],
})
export class NestedFormComponent implements OnInit {
  states: Array<string> = ['UP', 'MP', 'AP'];
  fruits: Array<string> = ['Manago', 'Grapes', 'Strawberry', 'Oranges'];

  nestedForm!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.nestedForm = this._fb.group({
      firstName: [],
      lastName: [],
      favFruits: this.addFruitsControls(),
      // we are creating 'address' here that means we have to show atleast one formArray at starting phase.
      address: this._fb.array([this.addAddressGroup()]),
    });
  }

  // function for creating a fruits array to formArray of formControl---
  addFruitsControls() {
    const arr = this.fruits.map((element) => {
      return this._fb.control(false);
    });
    return this._fb.array(arr);
  }

  // function for getting controls of favFruits formArray---
  get fruitsArray() {
    return this.nestedForm.controls['favFruits'] as FormArray;
  }

  addAddressGroup() {
    return this._fb.group({
      primaryFlag: [],
      streetAddress: [],
      city: [],
      state: ['', Validators.required],
      zipcode: [],
    });
  }

  // adding new address formArray---
  addAddress() {
    this.addressArray?.push(this.addAddressGroup());
  }
  removeAddress(index: number) {
    if (this.addressArray.length > 1) {
      this.addressArray.removeAt(index);
    }
  }

  // function for getting 'address' controls---
  get addressArray() {
    // return <FormArray>this.nestedForm.controls['address'];
    return this.nestedForm.get('address') as FormArray;
  }

  // get addressGroup() {
  //   return this.addressArray.controls;
  // }

  submitHandler() {
    console.log(this.nestedForm);

    console.log(this.nestedForm.value);
  }
}
