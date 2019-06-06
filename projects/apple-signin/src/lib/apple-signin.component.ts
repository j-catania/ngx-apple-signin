import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
declare const AppleID : any;

@Component({
  selector: 'apple-signin',
  template: `{{color}} {{type}}
    <button id="appleid-signin" (click)="singninIn()" [attr.data-color]="color" [attr.data-type]="type"> Sign In with Apple </button>
  `,
  styleUrls: ['./apple-signin.component.scss']
})
export class AppleSigninComponent implements OnInit, AfterViewChecked {

  @Input() clientId: string;
  @Input() scope: string;
  @Input() redirectURI: string;
  @Input() state: string;
  @Input() color = Color.black;
  @Input() type = Type.Apple;

  ngOnInit(): void {

  }

  singninIn(){
    AppleID.auth.signIn();
  }

  ngAfterViewChecked(): void {
      AppleID.auth.init({
        clientId : this.clientId,
        scope : this.scope,
        redirectURI: this.redirectURI,
        state : this.state
      });

  }
}

export enum Color {
  black = 'black',
  light = 'light'
}
export enum Type {
  SignIn = 'sign in',
  SignUp = 'sign up',
  Apple = 'apple',
  Continue = 'continue'
}
