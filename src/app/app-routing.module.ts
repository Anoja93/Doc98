import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';
import { SessionListComponent } from './session-list/session-list.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppointmentsComponent } from './appointments/appointments.component';

const routes: Routes = [
  { path: '', component:HomeComponent}, 
  { path: 'hospital_list', component:HospitalListComponent}, 
  { path: 'doctor_list', component:DoctorListComponent}, 
  { path: 'speciality_list', component:SpecialityListComponent}, 
  { path: 'session_list', component:SessionListComponent},
  { path: 'book', component:BookComponent}, 
  { path: 'register', component:RegisterComponent}, 
  { path: 'login', component:LoginComponent},
  { path: 'appointments', component:AppointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 




exports: [RouterModule]
})
export class AppRoutingModule { }
