

import { ViewComponent } from './view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from '../main/main.module';
import { NamesModule } from '../main/names/names.module';
import { FormCardModule } from '../main/form-card/form-card.module';
import { BuildCardModule } from '../main/build-card/build-card.module';


@NgModule({
  declarations: [
  ViewComponent
  ],
  imports: [
   CommonModule,
   MainModule
  ],

  exports: [ViewComponent],

  providers: []

})
export class ViewModule { }
