import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPacienteVetComponent } from './perfil-paciente-vet.component';

describe('PerfilPacienteVetComponent', () => {
  let component: PerfilPacienteVetComponent;
  let fixture: ComponentFixture<PerfilPacienteVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilPacienteVetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilPacienteVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
