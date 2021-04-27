import {  Component, OnInit } from '@angular/core';
import { CarModelsService } from '../../services/car-models.service';
import { Car } from '../../models/cars.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-models',
  templateUrl: './car-models.component.html',
  styleUrls: ['./car-models.component.less'],
  //encapsulation: ViewEncapsulation.None
})
export class CarModelsComponent implements OnInit {
  allCars: Car[] = [];
  loadedCars: Car[] = [];
  filter: any[] = [];
  mediaQueryList: any;
  breakpointObserver: any;
  activeFilter: string = "Todos" ;
  domain: string = "https://challenge.agenciaego.tech"


  constructor(private _carModelsService: CarModelsService, private router: Router) {}

  ngOnInit(): void {
    this._carModelsService
      .getAll()
      .then((cars) => {
        this.allCars = cars;
        this.loadedCars = cars;
      })
      .catch((error) => {});
  }

  orderBy(event): Car[] {
    let sort: string = event.value;
    switch (sort) {
      case 'lowestPrice':
        return this.allCars.sort((a, b) => a.price - b.price);
      case 'higherPrice':
        return this.allCars.sort((a, b) => b.price - a.price);
      case 'newest':
        return this.allCars.sort((a, b) => b.year - a.year);
      case 'oldest':
        return this.allCars.sort((a, b) => a.year - b.year);
      default:
        return this.allCars;
    }
  }

  filterBy(event, comesFromSelect?: boolean): Car[] {
    this.allCars = this.loadedCars;

    if(comesFromSelect)
      this.activeFilter = event.value;
    else
      this.activeFilter = event.target.value;

    if (this.activeFilter != 'Todos')
      this.allCars =  this.allCars.filter((c) => c.segment == this.activeFilter);
    else return this.allCars;
  }

  navigate(pRuta: string): void{
    this.router.navigate([pRuta]);
  }


}
