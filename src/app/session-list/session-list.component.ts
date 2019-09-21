import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

//1.
interface Session{
  id: string;
  date: string;
  doctor:string;
  hospital: string;
  doctor_name: string;
  hospital_name: string;
  speciality_name: string;
  hospital_place: string;

}


@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  sessions: Session[] = [];

  constructor(private http: HttpClient, public route: ActivatedRoute, public router: Router ) { }

  did:number;
  hid:number;
  sid:number;

  ngOnInit() {

    this.route
      .queryParams
      .subscribe(params =>{
        this.did =+params['did'] || 0;
        this.hid =+params['hid'] || 0;
        this.sid =+params['sid'] || 0;
      });

      var url = "http://salindakya.tk/doc98/api/doctor_session/list.php?did="+this.did+"&sid="+this.sid+"&hid="+this.hid;  //filter this.
    this.http.get<Session[]>(url).subscribe(data => {
      this.sessions = data;
      console.log(data);
    });

  }

  book(session: Session){
    this.router.navigate(
      ['/book'],
      { queryParams: { sid: session.id}}
    );
    //alert(JSON.stringify(session));
  }

}
