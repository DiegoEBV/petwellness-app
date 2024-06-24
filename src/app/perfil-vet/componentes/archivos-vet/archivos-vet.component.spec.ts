import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivosVetComponent } from './archivos-vet.component';

describe('ArchivosVetComponent', () => {
  let component: ArchivosVetComponent;
  let fixture: ComponentFixture<ArchivosVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchivosVetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchivosVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
