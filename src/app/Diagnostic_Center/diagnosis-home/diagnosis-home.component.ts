import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diagnosis-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './diagnosis-home.component.html',
  styleUrl: './diagnosis-home.component.css'
})
export class DiagnosisHomeComponent {

}
