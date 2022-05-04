import { Injectable } from '@angular/core';
import {categorie} from "../models/categorie.model";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable} from 'rxjs';
const AUTH_API = 'http://localhost:3000/';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }


  create(data: any): Observable<categorie> {
    return this.http.post<categorie>(AUTH_API + 'categories/', data)
   
  }

  getAllData(): Observable<any> {
    return this.http.get<categorie[]>(AUTH_API+'categories')
 }

 find(id:string): Observable<categorie> {
  return this.http.get<categorie>(AUTH_API + 'categories/' + id)
 
}

delete(id:string){
  return this.http.delete<categorie>(AUTH_API + 'categories/' + id)

}

update(id:string, categorie:categorie): Observable<categorie> {
  return this.http.put<categorie>( AUTH_API + 'categories/' + id, JSON.stringify(categorie),this.httpOptions)
 

}
}
