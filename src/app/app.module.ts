import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirplainComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
//import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AirplainComponent,
    HomeComponent,
   // ReactiveFormsModule
    
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule//,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
