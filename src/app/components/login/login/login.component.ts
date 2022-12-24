import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User={
    userName: '',
    password: '',
    rol:''
  };

  constructor(private loginService:LoginService, private router:Router){}

  registrar():void{
    this.router.navigate(["registro"])
  }

  login():void{
    const data = {
      userName: this.user.userName,
      password: this.user.password
    }

    this.loginService.login(data).subscribe({
      next: (res:any) =>{
        console.log(res);
        this.loginService.loginUser(res.token);

        localStorage.setItem("token",res.token)
      },
      error: (e)=>console.log(e)
    });
  }

  public loginUser(token:any){
    localStorage.setItem('token',token)
  }

  

}
