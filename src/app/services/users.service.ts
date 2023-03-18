import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Login, SignUp } from '../interfaces/data.interfaces';
import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  /* isAdminLoggedIn = new BehaviorSubject<boolean>(false); */
  isAdminLoggedIn : boolean = false;
   /* isLoginError = new BehaviorSubject<boolean>(false); */
  /* isLoginError = "" || false; */
  invalidUserAuth = new EventEmitter<boolean>(false)
  isUserLoggedIn : boolean = false;
  admin = {
    "admin" : true
  }

  constructor(private http: HttpClient, private router: Router, private location: Location) {}

  userSignUp(data: SignUp) {
    this.http
      .post('http://localhost:3000/user', data, { observe: 'response' })
      .subscribe((result) => {
        /* this.isAdminLoggedIn.next(true); */
        this.isUserLoggedIn = true;
        localStorage.setItem('newuser', JSON.stringify(result.body));
        this.router.navigate(['/main']);
      });
  }


  reloadAdmin() {
    if (localStorage.getItem('admin')) {
      /* this.isAdminLoggedIn.next(true); */
      this.isAdminLoggedIn = true;
      this.router.navigate(['admin-home']);
    }
  }

  reloadUser() {
    if (localStorage.getItem('user') || localStorage.getItem('newuser')) {
      this.router.navigate(['/main']);
    }
  }

  userLogin(data: Login) {
    this.http
      .get(`http://localhost:3000/user?email=${data.email}&password=${data.password}`, {observe: 'response'})
      .subscribe((result: any) => {
        if( result.body?.length && result.body[0].hasOwnProperty('admin') ){
          this.invalidUserAuth.emit(false);
          localStorage.setItem('admin', JSON.stringify(result.body));
          /* this.router.navigate(['admin-home']); */
          this.location.back();
        } else if( result.body?.length) {
          this.invalidUserAuth.emit(false);         
          localStorage.setItem('user', JSON.stringify(result.body));
          /* this.router.navigate(['/main']); */
          this.location.back() 
              
          
        } else {
          this.invalidUserAuth.emit(true);
        }
      })
  }
}
