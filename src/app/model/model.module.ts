import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  HttpClientModule } from "@angular/common/http";
import { RestDataSource } from './rest.datasource';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    RestDataSource,
   
  ]
})
export class ModelModule { }
