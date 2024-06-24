import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasConsultaVetComponent } from './notas-consulta-vet.component';

describe('NotasConsultaVetComponent', () => {
  let component: NotasConsultaVetComponent;
  let fixture: ComponentFixture<NotasConsultaVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotasConsultaVetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotasConsultaVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
