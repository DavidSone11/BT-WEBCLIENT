import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    console.log('inside sidebar');
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $(".btn").on("click",function () {
        $(".sidebar").toggleClass('no-sidebar');
        $(".page-wrapper").toggleClass('no-page-wrapper');
        // $('.page-wrapper').toggle();
        $(".btn").toggleClass('btnc');
        // $(".sidebar").hide();
      });
    });
  }

}
