import { Component, Input } from '@angular/core';
import { diagnoType } from '../diagnosis-home/model/diagnoType';
import { DiagnoService } from '../diagnosis-home/service/diagno.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-diagnosis',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-diagnosis.component.html',
  styleUrl: './add-diagnosis.component.css'
})
export class AddDiagnosisComponent {
  @Input() diagnoType:diagnoType;
  msg:string='';
constructor(private service:DiagnoService, private router:Router){
  this.diagnoType=new diagnoType();
}

addDiagno(){
  console.log('add Tests called ')
  this.service.addDiagno(this.diagnoType).subscribe(
    data=>this.msg="record added"+JSON.stringify(data),
    error=>this.msg=error.error
  );
}


}




