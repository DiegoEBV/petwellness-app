import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionGeneralVetComponent } from './informacion-general-vet.component';

describe('InformacionGeneralVetComponent', () => {
  let component: InformacionGeneralVetComponent;
  let fixture: ComponentFixture<InformacionGeneralVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformacionGeneralVetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacionGeneralVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
