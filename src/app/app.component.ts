import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewCustomerRegistrationComponent } from './new-customer-registration/new-customer-registration.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './NavBarCustomer/NavBarCustomer';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentStatusComponent } from './appointment-status/appointment-status.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,LoginPageComponent,NewCustomerRegistrationComponent,AdminDashboardComponent,
  HttpClientModule,NavBarComponent,AppointmentComponent,AppointmentStatusComponent,HealthcareComponent,UserProfileComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test_angular';
}
