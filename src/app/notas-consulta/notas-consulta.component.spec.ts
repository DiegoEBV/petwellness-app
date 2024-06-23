import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasConsultaComponent } from './notas-consulta.component';

describe('NotasConsultaComponent', () => {
  let component: NotasConsultaComponent;
  let fixture: ComponentFixture<NotasConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotasConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotasConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
