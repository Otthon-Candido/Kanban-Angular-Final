import { AppRoutingModule } from './../../app.routing.module';

import { NgModule } from '@angular/core';
import { AddNameComponent } from './add-name.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NamesModule } from '../names/names.module';



@NgModule({
  declarations: [
    AddNameComponent,
  ],
  imports: [
   ReactiveFormsModule,
   CommonModule,
   NamesModule,
   AppRoutingModule
  ],

  exports: [ AddNameComponent ],

  providers: []

})
export class AddNameModule { }
