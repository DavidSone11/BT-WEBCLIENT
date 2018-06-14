import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  public isLoading = false;
  
  constructor() { 
    localStorage.removeItem('currentUser');
  }

  ngOnInit() {
    
  }


  

}
