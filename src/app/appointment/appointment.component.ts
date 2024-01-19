import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Appointment } from './model/appointment';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
   @Input() appointment : Appointment;
   submitted:boolean=false;

   formSubmit(){
    this.submitted=true;
  }
  
  constructor(){
    this.appointment=new Appointment('','','')
  }
}

