import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyderabadLocationComponent } from './hyderabad-location.component';

describe('HyderabadLocationComponent', () => {
  let component: HyderabadLocationComponent;
  let fixture: ComponentFixture<HyderabadLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyderabadLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyderabadLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
