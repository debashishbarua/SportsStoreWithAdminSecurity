import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RestDataSource } from '../model/rest.datasource';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    StoreComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    RestDataSource
  ],
  exports: [
    StoreComponent,
   
  ]
})
export class StoreModule { }
