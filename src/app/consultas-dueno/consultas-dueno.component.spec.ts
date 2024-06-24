import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasDuenoComponent } from './consultas-dueno.component';

describe('ConsultasDuenoComponent', () => {
  let component: ConsultasDuenoComponent;
  let fixture: ComponentFixture<ConsultasDuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultasDuenoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultasDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
