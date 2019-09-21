import { Component } from '@angular/core';
import { SessionService } from './session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  auth: boolean;
  title = 'doc98';

  constructor(private session: SessionService){
    
  }

  ngOnInit(){
    this.auth = this.session.getAuth();
  }

}
