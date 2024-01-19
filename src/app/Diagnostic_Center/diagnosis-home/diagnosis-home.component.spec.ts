import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisHomeComponent } from './diagnosis-home.component';

describe('DiagnosisHomeComponent', () => {
  let component: DiagnosisHomeComponent;
  let fixture: ComponentFixture<DiagnosisHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosisHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagnosisHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
