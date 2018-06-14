import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regOBJ = <any>{};    
  constructor(private router: Router) { 
     
  }

  ngOnInit() {
  }
  register(form: any): void{
    
    console.log(this.regOBJ.username);
    this.router.navigate(['/dashboard']);
    
    
  }


}
