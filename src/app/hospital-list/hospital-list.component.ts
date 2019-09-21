import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//1.create interface
interface Hospital{

  id:string;
  name: string;
  place: string;

}

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {

  //2.create a array from class
  hospitals: Hospital[]=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  //3.bring back data from database
  var url = "http://salindakya.tk/doc98/api/hospital/list.php";
  this.http.get<Hospital[]>(url).subscribe(data=>{
    this.hospitals = data;
    console.log(data);
  });

  }

}
