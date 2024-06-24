import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasConsultaDuenioComponent } from './notas-consulta-duenio.component';

describe('NotasConsultaDuenioComponent', () => {
  let component: NotasConsultaDuenioComponent;
  let fixture: ComponentFixture<NotasConsultaDuenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotasConsultaDuenioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotasConsultaDuenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
