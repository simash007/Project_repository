import { Component } from '@angular/core';
import { TestService } from '../../service/test.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { testType } from '../../model/testType';

@Component({
  selector: 'app-show-all-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-all-test.component.html',
  styleUrl: './show-all-test.component.css'
})
export class ShowAllTestComponent {
  test: Observable<testType[]>

  constructor(service:TestService,private router:Router){
    this.test=service.getAllTest();
    
  }addtest(){
    this.router.navigate(['/add'])
  }

}
