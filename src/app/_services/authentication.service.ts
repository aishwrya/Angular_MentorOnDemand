import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Userlogin } from '../_models/userlogin';
import { Router } from '@angular/router';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 

  constructor(
    private httpClient:HttpClient,
    private router: Router,
  ) { 
     }

     authenticate(username, password) {
    return this.httpClient.post<any>('http://localhost:8090/authenticate',{username,password}).pipe(
       map(
         userData => {
         
          let tokenStr= userData.token;
          localStorage.setItem('token', tokenStr);
          let user=userData.user;
          localStorage.setItem('user',JSON.stringify(user));
          
          return userData;
         }
       )
  
      );
    }
  register(user:User)
  {
    return this.httpClient.post<any>('http://localhost:8090/register',user);
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('user')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
