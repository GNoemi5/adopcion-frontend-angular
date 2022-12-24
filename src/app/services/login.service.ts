import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Token } from '@angular/compiler';

const baseUrl = 'http://localhost:8080/auth';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<Token> {
    return this.http.post<Token>(baseUrl+'/login',data);
  }

  register(data: any): Observable<any> {
    return this.http.post(baseUrl+'/create', data);
  }

  public loginUser(token:any){
    localStorage.setItem('token',token);
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr=='' || tokenStr==null){
      return false;
    }
    return true;
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));  
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr!=null){
      return JSON.parse(userStr);
    }

    this.logout();
    return null; 
  }

  public getUserRole(){
    let user = this.getUser();
    return user.rol
  }
}
