import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GarageModule } from '../garage/garage.module'
import { GarageComponent } from '../garage/garage/garage.component';
import { CarModule } from '../car/car.module'
import { CarComponent } from '../car/car/car.component';

@NgModule({
  declarations: [
    AppComponent, GarageComponent, CarComponent
  ],
  imports: [
    BrowserModule, GarageModule, CarModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
