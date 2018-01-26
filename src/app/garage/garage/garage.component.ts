import { Component, OnInit } from '@angular/core';
import { Car } from '../../car/car-model//car';
import { CarService } from '../../car/car-service/car.service'

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  title: string;
  cars: Car[];
  selectedCar: Car;
  hideForm: boolean = true;
  createButton: boolean = true;
  createdCar: Car = {
    id: null,
    name: "",
    colour: "",
    licenseNumber: ""
  };

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.title = "Welcome to Garage Crud App";
    this.cars = this.carService.getCars();
    console.log(this.cars);

  }

  ngOnChanges() {
    
  }

  onSelectCar(car: Car) {
    this.selectedCar = car;
  }

  create(): void {
    this.hideForm = true;
    this.cars.push(this.createdCar);
    this.createdCar = {
      id: null,
      name: "",
      colour: "",
      licenseNumber: ""
    };
    this.createButton = true;
  }

  delete(index): void {
    this.cars.splice(index, 1);
    this.selectedCar = null;
  } 

  showCreateForm(): void {
    this.hideForm = false;
    this.createButton = false;
  }

}
