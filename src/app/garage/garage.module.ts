import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarageComponent } from './garage/garage.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forRoot([{
      path: 'details/:id',
      loadChildren: '../car/car.module#CarModule' 
    }])
  ],
  declarations: [GarageComponent],
  exports: [GarageComponent]
})
export class GarageModule {

}
