import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//1. create interface
interface Doctor{

  id: string;
  name: string;
  speciality: string;

}

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    var url = "http://salindakya.tk/doc98/api/doctor/list.php";
    this.http.get<Doctor[]>(url).subscribe(data => {
      this.doctors = data;
      console.log(data);
    });

  }

}
