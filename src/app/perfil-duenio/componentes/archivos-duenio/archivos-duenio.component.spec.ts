import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivosDuenioComponent } from './archivos-duenio.component';

describe('ArchivosDuenioComponent', () => {
  let component: ArchivosDuenioComponent;
  let fixture: ComponentFixture<ArchivosDuenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchivosDuenioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchivosDuenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
