import { Injectable } from '@angular/core';
import { Car } from '../car-model/car';

@Injectable()
export class CarService {

  cars: Car[] = [{
      id: "1",
      name: "lamborgini",
      colour: "Blue",
      licenseNumber: "1234"
    },
    {
      id: "2",
      name: "lamborgini",
      colour: "Blue",
      licenseNumber: "1234"
    },{
      id: "3",
      name: "lamborgini",
      colour: "Blue",
      licenseNumber: "1234"
    },{
      id: "4",
      name: "lamborgini",
      colour: "Blue",
      licenseNumber: "1234"
    }
  ];

  constructor() { }

  getCars(): Car[] {
    return this.cars;
  }

}
