import {Component, OnInit} from '@angular/core';
declare const AppleID : any;

@Component({
  selector: 'ng8-apple-siginin',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng8-apple-signin';

  ngOnInit(): void {
    AppleID.auth.init({
      clientId : '[CLIENT_ID]',
      scope : '[SCOPES]',
      redirectURI: '[REDIRECT_URI]',
      state : '[STATE]'
    });

    const buttonElement = document.getElementById('sign-in-with-apple-button');
    buttonElement.addEventListener('click', () => {
      AppleID.auth.signIn();
    });
  }
}
