import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoMascota } from '../models/tipo-mascota.model';

const baseUrl = 'http://localhost:8080/tipo-mascota/v1';

@Injectable({
  providedIn: 'root'
})

export class TipoMascotaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<TipoMascota[]> {
    return this.http.get<TipoMascota[]>(baseUrl+'/listar');
  }
}
