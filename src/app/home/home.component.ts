import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionService } from './../session';

export interface Doctor {
  id:string;
  name: string;
  speciality: string;
}

export interface Hospital {

  id: string;
  name: string;
  
  
}

export interface Speciality {
  id: string;
  name: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name : string;

  myControl1 = new FormControl();
  options1: Doctor[] = [];

  myControl2 = new FormControl();
  options2: Hospital[] = [];

  myControl3 = new FormControl();
  options3: Speciality[] = [];

  constructor(private http: HttpClient, public router: Router, private session: SessionService) { }

  filteredOptions1: Observable<Doctor[]>;
  filteredOptions2: Observable<Hospital[]>;
  filteredOptions3: Observable<Speciality[]>;

  logout(){
    this.session.logout();
    this.router.navigate(['/login']);
  }

  

  ngOnInit() {

    if(!this.session.getAuth()){
      this.router.navigate(['/login']);
    }

    this.name = this.session.getName();

    //4.
    var url1 = "http://salindakya.tk/doc98/api/doctor/list.php";
    this.http.get<Doctor[]>(url1).subscribe(data => {
      this.options1 = data;
      console.log(data);
    });

    var url2 = "http://salindakya.tk/doc98/api/hospital/list.php";
    this.http.get<Hospital[]>(url2).subscribe(data => {
      this.options2 = data;
      console.log(data);
    });

    var url3 = "http://salindakya.tk/doc98/api/speciality/list.php";
    this.http.get<Speciality[]>(url3).subscribe(data => {
      this.options3 = data;
      console.log(data);
    });


    this.filteredOptions1 = this.myControl1.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter1(name) : this.options1.slice())
      );

      this.filteredOptions2 = this.myControl2.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter2(name) : this.options2.slice())
      );

      this.filteredOptions3 = this.myControl3.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter3(name) : this.options3.slice())
      );
  }

  search(){
    var doctor = this.myControl1.value;
    var hospital = this.myControl2.value;
    var speciality = this.myControl3.value;

    var DID = (doctor)?doctor.id : 0;   //conditional statement
    var HID = (hospital)?hospital.id : 0;
    var SID = (speciality)?speciality.id : 0;

    this.router.navigate(
      ['/session_list'],
      { queryParams: {did: DID, hid: HID, sid: SID}}
    );

    //alert ("Hi" + JSON.stringify);
  }

  displayFn1(doctor?: Doctor): string | undefined {
    return doctor ? doctor.name : undefined;
  }

  displayFn2(hospital?: Hospital): string | undefined {
    return hospital ? hospital.name : undefined;
  }

  displayFn3(speciality?: Speciality): string | undefined {
    return speciality ? speciality.name : undefined;
  }

  private _filter1(name: string): Doctor[] {
    const filterValue = name.toLowerCase();

    return this.options1.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filter2(name: string): Hospital[] {
    const filterValue = name.toLowerCase();

    return this.options2.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filter3(name: string): Speciality[] {
    const filterValue = name.toLowerCase();

    return this.options3.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}