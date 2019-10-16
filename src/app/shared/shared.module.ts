import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
		BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule
  ]
})
export class SharedModule { }
