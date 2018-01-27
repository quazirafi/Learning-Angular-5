import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GarageModule } from '../garage/garage.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, GarageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
