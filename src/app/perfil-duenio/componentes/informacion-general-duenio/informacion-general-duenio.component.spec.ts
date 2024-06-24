import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionGeneralDuenioComponent } from './informacion-general-duenio.component';

describe('InformacionGeneralDuenioComponent', () => {
  let component: InformacionGeneralDuenioComponent;
  let fixture: ComponentFixture<InformacionGeneralDuenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformacionGeneralDuenioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacionGeneralDuenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
