import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car-model/car';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() car: Car;
  hero$: any;
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.hero$ = this.route.paramMap;
    console.log(this.hero$.source.value.id);
  }

}
