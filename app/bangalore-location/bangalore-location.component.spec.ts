import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BangaloreLocationComponent } from './bangalore-location.component';

describe('BangaloreLocationComponent', () => {
  let component: BangaloreLocationComponent;
  let fixture: ComponentFixture<BangaloreLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangaloreLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangaloreLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
