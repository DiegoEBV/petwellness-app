import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPosteriorComponent } from './consulta-posterior.component';

describe('ConsultaPosteriorComponent', () => {
  let component: ConsultaPosteriorComponent;
  let fixture: ComponentFixture<ConsultaPosteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaPosteriorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaPosteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
