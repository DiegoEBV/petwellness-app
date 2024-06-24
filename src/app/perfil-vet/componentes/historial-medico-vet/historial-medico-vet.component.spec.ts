import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialMedicoVetComponent } from './historial-medico-vet.component';

describe('HistorialMedicoVetComponent', () => {
  let component: HistorialMedicoVetComponent;
  let fixture: ComponentFixture<HistorialMedicoVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialMedicoVetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialMedicoVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
