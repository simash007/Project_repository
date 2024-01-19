import { TestBed } from '@angular/core/testing';
import { DiagnoService } from './diagno.service';


describe('DiagnoService', () => {
  let service: DiagnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
