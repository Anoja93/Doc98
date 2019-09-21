import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//1. create interface
export interface Speciality{

  id: string;
  name: string;

}


@Component({
  selector: 'app-speciality-list',
  templateUrl: './speciality-list.component.html',
  styleUrls: ['./speciality-list.component.css']
})
export class SpecialityListComponent implements OnInit {

  //2.create a array from class
  specialities: Speciality[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {  //here the things that hapennings when data loading 

    //3.bring back data from database
    var url = "http://salindakya.tk/doc98/api/speciality/list.php";
    this.http.get<Speciality[]>(url).subscribe(data => {
      this.specialities = data;
      console.log(data);
    });

  }

}
