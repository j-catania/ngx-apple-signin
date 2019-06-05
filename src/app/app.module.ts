import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppleSigninComponent } from './apple-signin/apple-signin.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppleSigninComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [AppleSigninComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
