import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { 
     
  }
  isLoading = false;
  userOBJ = <any>{};    
  public token:string;
//  private authService:AuthenticateService;

  ngOnInit():void{
    this.token = "db2961f3f56bbea01667312e4b6cc6f3d1aa536e"
  }

  dologin(form: any): void{
    // localStorage.setItem('currentUser', JSON.stringify({ username: this.userOBJ.username, token: this.token }));
    //localStorage.setItem('username',this.userOBJ.username);
    //localStorage.setItem('password',this.userOBJ.password);
    console.log(this.userOBJ.password);
    this.router.navigate(['/dashboard']);
    
    

    //this.authService.login(this.userOBJ.username,this.userOBJ.password);
    
  }


}