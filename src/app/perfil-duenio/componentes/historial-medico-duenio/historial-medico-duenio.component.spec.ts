import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialMedicoDuenioComponent } from './historial-medico-duenio.component';

describe('HistorialMedicoDuenioComponent', () => {
  let component: HistorialMedicoDuenioComponent;
  let fixture: ComponentFixture<HistorialMedicoDuenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialMedicoDuenioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialMedicoDuenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
