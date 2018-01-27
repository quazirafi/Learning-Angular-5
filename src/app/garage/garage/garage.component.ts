import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  title: string;
 
  hideForm: boolean = true;
  createButton: boolean = true;
  

  constructor() { }

  ngOnInit() {
    this.title = "Welcome to Garage Crud App";
    

  }

  ngOnChanges() {
    
  }

  showCreateForm(): void {
    
  }

}
