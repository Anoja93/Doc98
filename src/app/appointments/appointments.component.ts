import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../session';

//create interface
export interface Appointment{

  id: string;
  no: string;
  name: string;
  date: string;
  doctor_name: string;
  hopital_name: string;
  speciality_name: string;
  hospital_place: string;

}

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  //2
  appointments: Appointment[]= [];

  //3
  constructor(private http: HttpClient, private session:SessionService) { }

  ngOnInit() {

    

    //4.bring back data from database
     var url = "http://salindakya.tk/doc98/api/book/list.php?id="+this.session.getId();
     this.http.get<Appointment[]>(url).subscribe(data => {
       this.appointments = data;
       //console.log(data);
     });

  }

}
