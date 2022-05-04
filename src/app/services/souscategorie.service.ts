import { Injectable } from '@angular/core';
import { souscategorie } from "../models/souscategorie.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable} from 'rxjs';
const AUTH_API = 'http://localhost:3000/';


@Injectable({
  providedIn: 'root'
})
export class SouscategorieService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }


  create(data: any): Observable<souscategorie> {
    return this.http.post<souscategorie>(AUTH_API + 'souscategorie/', data)
   
  }

  getAllData(): Observable<any> {
    return this.http.get<souscategorie[]>(AUTH_API+'souscategorie')
 }

 find(id:string): Observable<souscategorie> {
  return this.http.get<souscategorie>(AUTH_API + 'souscategorie/' + id)
 
}

delete(id:string){
  return this.http.delete<souscategorie>(AUTH_API + 'souscategorie/' + id)

}

update(id:string, souscategorie:souscategorie): Observable<souscategorie> {
  return this.http.put<souscategorie>( AUTH_API + 'souscategorie/' + id, JSON.stringify(souscategorie),this.httpOptions)
 

}}
