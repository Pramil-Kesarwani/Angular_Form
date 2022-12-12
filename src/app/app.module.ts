import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { FormComponent } from './form/form.component';
import { ZipValidatorDirective } from './zip-validator.directive';
import { ReactiveSampleComponent } from './reactive-sample/reactive-sample.component';
import { NestedFormComponent } from './nested-form/nested-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ZipValidatorDirective,
    ReactiveSampleComponent,
    NestedFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsersModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide : LocationStrategy , useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
