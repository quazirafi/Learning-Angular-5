import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from '../car/car-service/car.service';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './car/car.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule, FormsModule, 
    RouterModule.forChild([{
      path: '',
      component: CarComponent 
    }])
  ],
  providers: [CarService],
  declarations: [CarComponent],
  exports:[CarComponent]
})
export class CarModule {
  
}
