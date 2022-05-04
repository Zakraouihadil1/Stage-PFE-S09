import { Injectable } from '@angular/core';
import{product} from'../models/produit.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable} from 'rxjs';
const AUTH_API = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }


  all(): Observable<product[]> {
    return this.http.get<any>(AUTH_API+'products')
 }

  find(id:string): Observable<product> {
    return this.http.get<product>(AUTH_API + 'products/' + id)
    
   
  }

  create(data: any): Observable<product> {
    return this.http.post<product>(AUTH_API + 'products', data)
   
  }
   
  delete(id:string){
    return this.http.delete<product>(AUTH_API + 'products/' + id)
  
  }
  
  update(id:string, product:product): Observable<product> {
    return this.http.put<product>( AUTH_API + 'products/' + id, JSON.stringify(product),this.httpOptions)
   
  
  }

 /* upload(data:any):Observable<product> {
    return this.http.post<product>(AUTH_API + 'products/upload', data)

  }*/
}
