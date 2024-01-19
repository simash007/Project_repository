import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NarBarComponent } from './NavBarCustomer/NavBarCustomer';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentStatusComponent } from './appointment-status/appointment-status.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HealthcareComponent } from './healthcare/healthcare.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NarBarComponent, AppointmentComponent, RouterLink, AppointmentStatusComponent, UserProfileComponent, HealthcareComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Health';
}

