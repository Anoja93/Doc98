import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  myControl1 = new FormControl();
  myControl2 = new FormControl();
  myControl3 = new FormControl();

  sid : number;  //Session ID

  constructor(private http: HttpClient, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params =>{
        this.sid =+params['sid'] || 0;
        
      });

  }

  confirm(){
    var name = this.myControl1.value;
    var email = this.myControl2.value;
    var mobile = this.myControl3.value;
    var sid = this.sid;

    let body = new HttpParams({
      fromObject : {
        'name': name,
        'email': email,
        'phone': mobile,
        'session_id': sid.toString()
      }
    });


    //alert("Name="+name);
    var url = "http://salindakya.tk/doc98/api/book/add.php";
    this.http.post<any>(url,body).subscribe(
      data=>{
        alert(JSON.stringify(data));
      }
    );
  }

}
