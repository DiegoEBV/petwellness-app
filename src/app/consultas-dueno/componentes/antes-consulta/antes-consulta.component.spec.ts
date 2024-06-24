import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntesConsultaComponent } from './antes-consulta.component';

describe('AntesConsultaComponent', () => {
  let component: AntesConsultaComponent;
  let fixture: ComponentFixture<AntesConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AntesConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AntesConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
