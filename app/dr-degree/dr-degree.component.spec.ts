import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrDegreeComponent } from './dr-degree.component';

describe('DrDegreeComponent', () => {
  let component: DrDegreeComponent;
  let fixture: ComponentFixture<DrDegreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrDegreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
