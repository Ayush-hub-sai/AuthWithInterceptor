import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router) { }
  loginObj = {
    "EmailId": "",
    "Password": ""
  }

  onLogin() {
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login', this.loginObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message)
        localStorage.setItem('loginToken', res.data.token)
        this.router.navigate(['/dashboard'])

      } else {
        alert(res.message)
      }
    })
  }


}
