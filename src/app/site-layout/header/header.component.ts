import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  adminName: string = '';
  userName: string = '';
  isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('admin') /* && val.url.includes('admin') */) {
          this.menuType = 'admin';
          if (localStorage.getItem('admin')) {
            let adminStore = localStorage.getItem('admin');
            let adminData = adminStore && JSON.parse(adminStore)[0];
            this.adminName = adminData.name;
            this.menuType = 'admin';
            //console.log(this.menuType)
          }
        } else if(localStorage.getItem('user')) {
            let userStore = localStorage.getItem('user');
            let userData = userStore && JSON.parse(userStore)[0];
            console.log(userData)
            this.userName = userData.name;
            this.menuType = 'user';
          } else if(localStorage.getItem('newuser')) {
            let userStore = localStorage.getItem('newuser');
            let userData = userStore && JSON.parse(userStore);
            console.log(userData)
            this.userName = userData.name;
            this.menuType = 'user';
          } else {
          this.menuType = 'default';
          //console.log(this.menuType)
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('admin');
    this.router.navigate(['/user-auth']);
  }

   userLogout(){
    localStorage.removeItem('user');
    localStorage.removeItem('newuser');
    this.router.navigate(['/user-auth']);
  }
}
