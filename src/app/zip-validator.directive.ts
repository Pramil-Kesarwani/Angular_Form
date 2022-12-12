import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validators } from '@angular/forms';

// @Directive({
//   selector: '[appZipValidator]',
//   providers: [{provide:NG_VALIDATORS,useExisting:ZipValidatorDirective,multi:true}]
// })
// export class ZipValidatorDirective implements Validators {

//   constructor() { }

//   validate(control: AbstractControl) {
//     const elementValue = control.value;

//     if (elementValue === null || elementValue === undefined || elementValue === '') {
//       return {'cus_required':'Field is required'}
//     }
//     const reg = new RegExp('^[0-9]{5}$');
//     if (!reg.test(elementValue)) {
//       return { 'cus_required': 'Value should be 5 digit number' };
//     }
//     return null;
//   }

// }


// Practice--- 
@Directive({
  selector: '[appZipValidator]',
  providers : [{provide : NG_VALIDATORS,useExisting:ZipValidatorDirective,multi:true}]
})
export class ZipValidatorDirective{

  constructor() { }
  validate(control: AbstractControl) {
    const elementValue = control.value;
    if (elementValue === null || elementValue === undefined || elementValue === '') {
      return { 'cus_required': 'this field is required' };
    }
    const reg = new RegExp('^[0-9]{5}$');
    if (!reg.test(elementValue)) {
      return {'cus_pattern':'pattern should of 5 numbers only'}
    }
    return null;
  }
}