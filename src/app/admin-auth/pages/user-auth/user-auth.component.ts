import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Product, Login } from 'src/app/interfaces/data.interfaces';
import { UserService } from 'src/app/services/users.service';
import { SignUp } from '../../../interfaces/data.interfaces';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  showLogin: boolean= true;
  authError: string = '';

  constructor( private user: UserService,
               private product: ProductService,
               private router: Router ) { }

  ngOnInit(): void {
    this.user.reloadAdmin();
    this.user.reloadUser();
  }

  signUp( data: SignUp ): void {
    this.user.userSignUp(data)
  }

  login( data: Login ): void {
    /* this.authError=''; */
    this.user.userLogin(data)
    this.user.invalidUserAuth
      .subscribe((result) => {
        if (result) {
          this.authError = 'Email o contraseña no son correctos'
        }
      })
    /* if (this.user.isLoginError = false) {      
      this.authError='Email o contraseña no son correctos'
      console.log('hola')
    } else {
      console.log('hola con error')
    } */
  }

  openLogin() {
    this.showLogin= true;
  }

  openSignUp() {
    this.showLogin= false;
  }

}
