import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar(){

  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $(".btn").on("click",function () {
        $(".sidebar").toggleClass('no-sidebar');
        $(".page-wrapper").toggleClass('no-page-wrapper');
        $(".navbar").toggleClass('no-navbar');
        // $('.page-wrapper').toggle();
        $(".btn").toggleClass('btnc');
        // $(".sidebar").hide();
      });
    });
  }

}
