import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaDuenioComponent } from './estadistica-duenio.component';

describe('EstadisticaDuenioComponent', () => {
  let component: EstadisticaDuenioComponent;
  let fixture: ComponentFixture<EstadisticaDuenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstadisticaDuenioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadisticaDuenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
