import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  link(data: number) {
    switch(data) {
      case 1: this.router.navigate(['posts']); break;
      case 2: this.router.navigate(['albums']); break;
      case 3: this.router.navigate(['todos']); break;
    }
  } 
}
