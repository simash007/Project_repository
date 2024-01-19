import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { testData } from './testData/testData';
import { testType } from '../model/testType';

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent {
  testType:testType[];

  constructor(){
    this.testType=testData;
  }
}

