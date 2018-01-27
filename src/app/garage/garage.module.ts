import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarageComponent } from './garage/garage.component';
import { CarModule} from '../car/car.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, CarModule, FormsModule
  ],
  declarations: [GarageComponent],
  exports: [GarageComponent]
})
export class GarageModule {

}
