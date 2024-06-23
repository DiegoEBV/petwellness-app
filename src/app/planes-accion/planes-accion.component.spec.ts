import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesAccionComponent } from './planes-accion.component';

describe('PlanesAccionComponent', () => {
  let component: PlanesAccionComponent;
  let fixture: ComponentFixture<PlanesAccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanesAccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanesAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
