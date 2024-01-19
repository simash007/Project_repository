import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-appointment-status',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './appointment-status.component.html',
  styleUrl: './appointment-status.component.css'
})
export class AppointmentStatusComponent {
appointment: any;

}
