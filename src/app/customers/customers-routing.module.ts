import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers.component';
import { ReactiveFormCustomerComponent } from './reactive-form-customer/reactive-form-customer.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'add', component: AddCustomerComponent },
  { path: 'reactive', component: ReactiveFormCustomerComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
