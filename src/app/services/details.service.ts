import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarDetail } from '../models/details.mode';

@Injectable({
  providedIn: 'root'
})
export class DetailsService{
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://challenge.agenciaego.tech/models/';
  }

   getAll(carId: string): Promise<CarDetail>{
    return this.http.get<CarDetail>(this.baseUrl + carId).toPromise();
  }
}
