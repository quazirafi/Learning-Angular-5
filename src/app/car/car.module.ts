import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from '../car/car-service/car.service'
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CarService],
  declarations: []
})
export class CarModule {
  
}
