import {Component, Input, OnInit} from '@angular/core';
declare const AppleID : any;

@Component({
  selector: 'ng8-apple-siginin',
  templateUrl: './apple-signin.component.html',
  styleUrls: ['./apple-signin.component.scss']
})
export class AppleSigninComponent implements OnInit {

  @Input() clientId: string;
  @Input() scope: string;
  @Input() redirectURI: string;
  @Input() state: string;

  ngOnInit(): void {
    console.log(this.clientId)
    console.log(this.scope)
    console.log(this.redirectURI)
    console.log(this.state)
    AppleID.auth.init({
      clientId : this.clientId,
      scope : this.scope,
      redirectURI: this.redirectURI,
      state : this.state
    });

  }

  singninIn(){
    AppleID.auth.signIn();
  }
}
