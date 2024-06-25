import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesAccionDuenioComponent } from './planes-accion-duenio.component';

describe('PlanesAccionDuenioComponent', () => {
  let component: PlanesAccionDuenioComponent;
  let fixture: ComponentFixture<PlanesAccionDuenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanesAccionDuenioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanesAccionDuenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
