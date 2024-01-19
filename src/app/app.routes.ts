import { Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentStatusComponent } from './appointment-status/appointment-status.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NarBarComponent } from './NavBarCustomer/NavBarCustomer';
import { HealthcareComponent } from './healthcare/healthcare.component';


export const routes: Routes = [
 
    {path: 'appointment',component:AppointmentComponent},
    {path: 'appointment-status',component:AppointmentStatusComponent},
    {path: 'user-profile',component:UserProfileComponent},
    {path: 'healthcare',component:HealthcareComponent},
   
 
];
