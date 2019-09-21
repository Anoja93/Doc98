import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatModule} from './material.theme';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';

import { HttpClientModule } from '@angular/common/http';
import { SessionListComponent } from './session-list/session-list.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppointmentsComponent } from './appointments/appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    DoctorListComponent,
    HospitalListComponent,
    SpecialityListComponent,
    SessionListComponent,
    BookComponent,
    LoginComponent,
    RegisterComponent,
    AppointmentsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    MatModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
