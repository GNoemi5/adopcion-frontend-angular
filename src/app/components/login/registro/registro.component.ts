import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  user: User = {
    userName: '',
    password: '',
    rol: '',
  };

  constructor(private loginService: LoginService, private router: Router) {}

  registrar(): void {
    this.loginService.register(this.user).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.log(e),
    });
  }
}
