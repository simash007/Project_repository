import { Component, Input } from '@angular/core';
import { testType } from '../../model/testType';
import { TestService } from '../../service/test.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-test',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-test.component.html',
  styleUrl: './add-test.component.css'
})
export class AddTestComponent {
  
  @Input() testType:testType;
  msg:string='';
constructor(private service:TestService, private router:Router){
  this.testType=new testType();
}
addTest(){
  console.log('add Tests called ')
  this.service.addTest(this.testType).subscribe(
    data=>this.msg="record added"+JSON.stringify(data),
    error=>this.msg=error.error
  );
}
showall(){
  this.router.navigate(['/showall']);
}

}
