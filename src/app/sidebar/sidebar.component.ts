import { Component, OnInit } from '@angular/core';
import { SessionService } from './../session';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  name: string;
 


  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
    this.name = this.session.getName();
  }

  

  logout(){
    this.session.logout();
    this.router.navigate(['/login']);
  }

  

}
