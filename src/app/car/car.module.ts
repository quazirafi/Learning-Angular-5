import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from '../car/car-service/car.service';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './car/car.component';
@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  providers: [CarService],
  declarations: [CarComponent],
  exports:[CarComponent]
})
export class CarModule {
  
}
