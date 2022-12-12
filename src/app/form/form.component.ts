import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userName={'fname':'Pramil','lname':'Kesarwani'}
  constructor() { }

  ngOnInit(): void {
  }
  submitHandler(myForm: NgForm) {
    console.log(myForm);
    console.log('Modal value---',this.userName);
    console.log('Form value---',myForm.value);
    
  }

}
