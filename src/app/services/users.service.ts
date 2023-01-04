import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Login, SignUp } from '../interfaces/data.interfaces';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  /* isAdminLoggedIn = new BehaviorSubject<boolean>(false); */
  isAdminLoggedIn : boolean = false;
   /* isLoginError = new BehaviorSubject<boolean>(false); */
  isLoginError = "" || false;
  isUserLoggedIn : boolean = false;
  admin = {
    "admin" : true
  }

  constructor(private http: HttpClient, private router: Router) {}

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
    //api call code will be there
    this.http
      .get(`http://localhost:3000/user?email=${data.email}&password=${data.password}`, {observe: 'response'})
      .subscribe((result: any) => {
/*         console.log(result.body[0].hasOwnProperty('admin')); */
        /* if( result.body.length){ */
        if( result.body?.length && result.body[0].hasOwnProperty('admin') ){
          this.isLoginError = false;
          console.log(result.body[0].hasOwnProperty('admin'));
          localStorage.setItem('admin', JSON.stringify(result.body));
          this.router.navigate(['admin-home']);
        } else if(result.body?.length) {
          this.isLoginError = false;
          console.log(result.body[0].hasOwnProperty('user'));
          localStorage.setItem('user', JSON.stringify(result.body));
          this.router.navigate(['/main']);
        } else {
          /* this.isLoginError.emit(true); */
          this.isLoginError = true;
        }
      })
  }
}
