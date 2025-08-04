import { Injectable } from '@angular/core';
import { Residence } from '../core/models/residence';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidencesService {

   

  constructor(private http : HttpClient) { }

  getResidences():Observable<Residence[]>{
    return this.http.get<Residence[]>('http://localhost:3000/Residences')
  }
}
