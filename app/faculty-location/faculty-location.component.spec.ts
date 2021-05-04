import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyLocationComponent } from './faculty-location.component';

describe('FacultyLocationComponent', () => {
  let component: FacultyLocationComponent;
  let fixture: ComponentFixture<FacultyLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
