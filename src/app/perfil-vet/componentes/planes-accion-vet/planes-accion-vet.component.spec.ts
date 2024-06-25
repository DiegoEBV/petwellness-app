import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesAccionVetComponent } from './planes-accion-vet.component';

describe('PlanesAccionVetComponent', () => {
  let component: PlanesAccionVetComponent;
  let fixture: ComponentFixture<PlanesAccionVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanesAccionVetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanesAccionVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
