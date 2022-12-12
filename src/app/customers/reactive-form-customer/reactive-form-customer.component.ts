import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-customer',
  templateUrl: './reactive-form-customer.component.html',
  styleUrls: ['./reactive-form-customer.component.css']
})
export class ReactiveFormCustomerComponent implements OnInit {

  // define a form---
  addLoanTypesForm !: FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    // using direct FormGroup and FormControl (without using FormBuilder)---

    // this.addLoanTypesForm = new FormGroup({
    //   'loanName': new FormControl(),
    //   'loanType':new FormControl(),
    //   'loanDescription': new FormControl(),
    // })

    // using FormBuilder---

    // this.addLoanTypesForm = this.fb.group({
    //   'loanName': new FormControl(),
    //   'loanType': new FormControl(),
    //   'loanDescription': new FormControl()
    // });

  // Reactive form using FormArray---
    // difining a formArray---

    let users = new FormArray([
      new FormControl('ARC'),
      new FormControl('TUTORIAL')
    ]);
    console.log(users);
    console.log(users.value);


    // adding Validation in reactive forms---
    this.addLoanTypesForm = this.fb.group({
      loanName: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      // 'loanType': new FormControl('',[Validators.required,Validators.minLength(5)]),
      loanType: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      loanDescription: new FormControl('', Validators.required),

      // adding FormArray in controls---
      // users: new FormArray([
      //   new FormControl('ARC'),
      //   new FormControl('TUTORIAL'),
      // ]),

      'users':new FormArray([
        this.fb.group({
          'name': new FormControl('pramil'),
          'age': new FormControl('young'),
          'dept':new FormControl('IT')
        })
      ])



    });











    // Direct way of setting value of entire form in one go---
    // this.addLoanTypesForm = this.fb.group({
    //   'loanName': new FormControl('abc'),
    //   'loanType': new FormControl('def'),
    //   'loanDescription':new FormControl('ghi')
    // })

    // setting value of form using 'setValue() function using using object of all formControl name---
    // const newLoanObj = {
    //   loanName: 'carLoan',
    //   loanDescription: 'get the car loan',
    //   loanType: 'car loan with low interest',
    // };
    // this.addLoanTypesForm.setValue(newLoanObj);

    // setting value of form using 'setValue()' function ---
    // this.addLoanTypesForm.setValue({ 'loanName': 'hello', 'loanDescription': 'there', 'loanType': 'Pramil' })
    // this.addLoanTypesForm.patchValue({'loanName':'jlgjldfgljfd'})

    // form value changes '.valueChanges' it is observable , so we have to subscribe to it.
    // this.addLoanTypesForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // });

    // form value changes for single control---
    this.addLoanTypesForm.get('loanName')?.valueChanges.subscribe((data) => {
      console.log(data);
    });

    // form statusChanges for complete form---
    this.addLoanTypesForm.statusChanges.subscribe((data) => {
      console.log(data);
    });

    // form statusChanges for single control/element of form---
    this.addLoanTypesForm.controls['loanType']?.statusChanges.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }



  addLoanType() {
    console.log(this.addLoanTypesForm.value);

  // getting particular field value of a form---
    // console.log(this.addLoanTypesForm.get('loanName')?.value);
    // console.log(this.addLoanTypesForm.controls['loanType'].value);
    
  }

  resetForm() {
    this.addLoanTypesForm.reset();
  }

}

