import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../models/mascota.model';

const baseUrl = 'http://localhost:8080/adopcion/v1';

@Injectable({
  providedIn: 'root'
})
export class AdopcionService {

  constructor(private http: HttpClient) { }

  getMascotasDisponibles(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(baseUrl+'/listar-mascotas-disponibles');
  }

}
