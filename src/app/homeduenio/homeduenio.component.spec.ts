import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeduenioComponent } from './homeduenio.component';

describe('HomeduenioComponent', () => {
  let component: HomeduenioComponent;
  let fixture: ComponentFixture<HomeduenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeduenioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeduenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
