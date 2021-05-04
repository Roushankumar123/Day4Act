import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyQualificationComponent } from './faculty-qualification.component';

describe('FacultyQualificationComponent', () => {
  let component: FacultyQualificationComponent;
  let fixture: ComponentFixture<FacultyQualificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyQualificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
