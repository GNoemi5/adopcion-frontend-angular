import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../models/mascota.model';

const baseUrl = 'http://localhost:8080/mascota/v1';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(baseUrl+'/listar');
  }

  get(id: any): Observable<Mascota> {
    return this.http.get<Mascota>(`${baseUrl+'/listar'}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl+'/registrar', data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`${baseUrl}?title=${title}`);
  }
}