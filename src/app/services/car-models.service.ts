import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/cars.model';

@Injectable({
  providedIn: 'root'
})
export class CarModelsService {
  baseUrl: string;

  constructor(private http: HttpClient){
    this.baseUrl = 'http://challenge.agenciaego.tech/models';
  }

  getAll(): Promise<Car[]>{
    return this.http.get<Car[]>(this.baseUrl).toPromise();
  }
}
