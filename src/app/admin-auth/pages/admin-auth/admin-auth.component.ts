import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Login } from 'src/app/interfaces/data.interfaces';
import { AdminService } from 'src/app/services/admin.service';

/* import { SignUp } from '../interfaces/data-interface'; */

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {

  showLogin: boolean= false;
  authError: string = '';

  constructor( private admin: AdminService,
               private router: Router ) { }

  ngOnInit(): void {
    this.admin.reloadAdmin();
  }

/*   signUp( data: SignUp ): void {
    this.admin.userSignUp(data)
  } */

  login( data: Login ): void {
    this.authError='';
    this.admin.userLogin(data)
    /* this.admin.isLoginError
        .subscribe(( isError )=> {
          if( isError ) {
            this.authError='Email or password is not correct'
          }
        }) */
    if (this.admin.isLoginError = true) {
      this.authError='Email or password is not correct'
    }
  }

/*   openLogin() {
    this.showLogin= true;
  }

  openSignUp() {
    this.showLogin= false;
  } */

}
