import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysoreLocationComponent } from './mysore-location.component';

describe('MysoreLocationComponent', () => {
  let component: MysoreLocationComponent;
  let fixture: ComponentFixture<MysoreLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysoreLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysoreLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
