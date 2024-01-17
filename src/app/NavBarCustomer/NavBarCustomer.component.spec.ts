import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarBarComponent } from './NavBarCustomer';

describe('NarBarComponent', () => {
  let component: NarBarComponent;
  let fixture: ComponentFixture<NarBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NarBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NarBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
