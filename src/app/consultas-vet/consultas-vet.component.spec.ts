import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasVetComponent } from './consultas-vet.component';

describe('ConsultasVetComponent', () => {
  let component: ConsultasVetComponent;
  let fixture: ComponentFixture<ConsultasVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultasVetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultasVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
