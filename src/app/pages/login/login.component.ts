import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser } from '../../core/model/interfaces/IUser';
import { UserService } from '../../core/service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginObj: IUser = {
    userName: "",
    password: ""
  }

  userService = inject(UserService)
  router= inject(Router)

  login() {
    this.userService.onLogin(this.loginObj).subscribe((res) => {
      if (res.result) {
        console.log(res.data)
        localStorage.setItem("token", JSON.stringify(res.data))
        this.router.navigateByUrl('/dashboard/user-list')
      } else {
        alert(res.message)
      }
    })
  }
}
