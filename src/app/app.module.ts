
import { notFoundModule } from './errors/not-found.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    notFoundModule,
    ViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
