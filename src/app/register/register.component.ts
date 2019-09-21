import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myControl1 = new FormControl();
  myControl2 = new FormControl();
  myControl3 = new FormControl();
  myControl4 = new FormControl();

  constructor(private http: HttpClient, public route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  register(){
    var name = this.myControl1.value;
    var email = this.myControl2.value;
    var mobile = this.myControl3.value;
    var password = this.myControl4.value;

    let body = new HttpParams({
      fromObject : {
        'name': name,
        'email': email,
        'phone': mobile,
        'password': password
      }
    });

    var url = "http://salindakya.tk/doc98/api/user/add.php";
    this.http.post<any>(url,body).subscribe(
      data=>{
        alert(JSON.stringify(data));
      }
    );
  }

  


}
