import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  userList: any[] = []

  constructor(private http: HttpClient, private router: Router) {
    this.getUser()
  }

  getUser() {
    this.http.get('https://freeapi.miniprojectideas.com/api/User/GetAllUsers').subscribe((res: any) => {
      this.userList = res.data
    })
  }

}
