import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppleSigninComponent } from './apple-signin.component';

@NgModule({
  declarations: [
    AppleSigninComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [AppleSigninComponent],
  providers: [],
  bootstrap: [AppleSigninComponent]
})
export class AppModule { }
