import { TestBed, async } from '@angular/core/testing';
import { AppleSigninComponent } from './apple-signin.component';

describe('AppleSigninComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppleSigninComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppleSigninComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng8-apple-signin'`, () => {
    const fixture = TestBed.createComponent(AppleSigninComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng8-apple-signin');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppleSigninComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ng8-apple-signin!');
  });
});
