import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeDegreeComponent } from './me-degree.component';

describe('MeDegreeComponent', () => {
  let component: MeDegreeComponent;
  let fixture: ComponentFixture<MeDegreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeDegreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
