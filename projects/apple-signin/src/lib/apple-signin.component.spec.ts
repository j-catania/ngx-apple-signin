import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleSigninComponent } from './apple-signin.component';

describe('AppleSigninComponent', () => {
  let component: AppleSigninComponent;
  let fixture: ComponentFixture<AppleSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppleSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
