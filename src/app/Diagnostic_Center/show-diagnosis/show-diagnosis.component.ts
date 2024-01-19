import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { diagnoType } from '../diagnosis-home/model/diagnoType';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DiagnoService } from '../diagnosis-home/service/diagno.service';

@Component({
  selector: 'app-show-diagnosis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-diagnosis.component.html',
  styleUrl: './show-diagnosis.component.css'
})
export class ShowDiagnosisComponent {
  test: Observable<diagnoType[]>

  constructor(service:DiagnoService,private router:Router){
    this.test=service.getAllDiagno();
    
  }addDiagno(){
    this.router.navigate(['/add'])
  }

   


}
