import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormCustomerComponent } from './reactive-form-customer/reactive-form-customer.component';


@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomerComponent,
    ReactiveFormCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
})
export class CustomersModule { }
