import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { tap } from 'rxjs';
const AUTH_API = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  

  constructor(private http:HttpClient,public router: Router) { }


  login(data:any) {
    return this.http.post<{access_token:  string,roles:string}>(AUTH_API+'auth', data,).pipe(tap(res => {
    localStorage.setItem('access_token', res.access_token);
    

}))
}


register(data:any) {
  return this.http.post<{access_token: string}>(AUTH_API+'users',data).pipe(tap(res => {
  this.login(data)
}))
}

get(data:any) {
  return this.http.get<{access_token: string}>(AUTH_API+'users',data).pipe(tap(res => {
  return data;
}))
}

logout() {
  localStorage.removeItem('access_token');
  this.router.navigate(['/login']);
}

 loggedIn(){
  return localStorage.getItem('access_token') ;
}
}
