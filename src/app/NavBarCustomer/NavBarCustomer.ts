import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppointmentStatusComponent } from '../appointment-status/appointment-status.component';


@Component({
  selector: 'app-NavBarComponent',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,AppointmentStatusComponent],
  templateUrl: './NavBarCustomer.component.html',
  styleUrl: './NavBarCustomer.component.css'
})
export class NavBarComponent {


}
