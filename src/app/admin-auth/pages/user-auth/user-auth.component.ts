import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Login } from 'src/app/interfaces/data.interfaces';
import { UserService } from 'src/app/services/users.service';
import { SignUp } from '../../../interfaces/data.interfaces';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  showLogin: boolean= true;
  authError: string = '';

  constructor( private user: UserService,
               private router: Router ) { }

  ngOnInit(): void {
    this.user.reloadAdmin();
    this.user.reloadUser();
  }

  signUp( data: SignUp ): void {
    this.user.userSignUp(data)
  }

  login( data: Login ): void {
    this.authError='';
    this.user.userLogin(data)
    /* this.admin.isLoginError
        .subscribe(( isError )=> {
          if( isError ) {
            this.authError='Email or password is not correct'
          }
        }) */
    if (this.user.isLoginError = true) {
      this.authError='Email o contraseña no son correctos'
    }
  }

  openLogin() {
    this.showLogin= true;
  }

  openSignUp() {
    this.showLogin= false;
  }

}
