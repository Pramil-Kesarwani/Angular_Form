import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  firstName = "Hello";
  addCustomerForm !: NgForm;
  
  constructor() { }

  ngOnInit(): void {
  }

  addCustomer(formValue:NgForm) {
    console.log(formValue.value);
    formValue.setValue({hello:'Pramil'})
  }
  resetForm(formValue:NgForm) {
    formValue.reset();
  }


}
