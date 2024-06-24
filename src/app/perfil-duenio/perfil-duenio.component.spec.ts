import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDuenioComponent } from './perfil-duenio.component';

describe('PerfilDuenioComponent', () => {
  let component: PerfilDuenioComponent;
  let fixture: ComponentFixture<PerfilDuenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilDuenioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilDuenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
