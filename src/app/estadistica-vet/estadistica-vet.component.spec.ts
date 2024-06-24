import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaVetComponent } from './estadistica-vet.component';

describe('EstadisticaVetComponent', () => {
  let component: EstadisticaVetComponent;
  let fixture: ComponentFixture<EstadisticaVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstadisticaVetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadisticaVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
