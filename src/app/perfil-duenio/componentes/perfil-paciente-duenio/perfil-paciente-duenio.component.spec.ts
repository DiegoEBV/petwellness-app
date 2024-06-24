import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPacienteDuenioComponent } from './perfil-paciente-duenio.component';

describe('PerfilPacienteDuenioComponent', () => {
  let component: PerfilPacienteDuenioComponent;
  let fixture: ComponentFixture<PerfilPacienteDuenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilPacienteDuenioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilPacienteDuenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
