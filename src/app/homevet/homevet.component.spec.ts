import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomevetComponent } from './homevet.component';

describe('HomevetComponent', () => {
  let component: HomevetComponent;
  let fixture: ComponentFixture<HomevetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomevetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomevetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
