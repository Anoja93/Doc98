import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SessionService } from './../session';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myControl1 = new FormControl();
  myControl2 = new FormControl();

  constructor(private http: HttpClient, private session: SessionService, private router: Router) { }

  ngOnInit() {
  }

  login(){

    var email = this.myControl1.value;
    var password = this.myControl2.value;

    let body = new HttpParams({
      fromObject : {
      
        'email': email,
        'password': password
      }
    });

    var url = "http://salindakya.tk/doc98/api/user/login.php";
    this.http.post<any>(url,body).subscribe(
      data=>{
        //alert(JSON.stringify(data));
        if(data["auth"]){
          this.session.setAuth(true);
          this.session.setId(data["id"]);
          this.session.setName(data["name"]);
          this.router.navigate(['/']);

        }else{
          alert("Username Or Password Incorrect");
        }
      }
    );

  }

}
