# Angular 8 Apple Sign In component 
<!-- BADGES/ -->

<span class="badge-npmversion"><a href="https://npmjs.org/package/ng8-apple-signin" title="View this project on NPM"><img src="https://img.shields.io/npm/v/ng8-apple-signin.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/ng8-apple-signin" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/ng8-apple-signin.svg" alt="NPM downloads" /></a></span>
<span class="badge-badge"><a href="https://david-dm.org/Juu-/ng8-apple-signin" title="David Dependencies Badge"><img src="https://david-dm.org/Juu-/ng8-apple-signin/status.svg" alt="David Dependencies Badge" /></a></span>
<span class="badge-badge"><a href="https://david-dm.org/Juu-/ng8-apple-signin?type=dev" title="David Dev Dependencies Badge"><img src="https://david-dm.org/Juu-/ng8-apple-signin/dev-status.svg" alt="David Dev Dependencies Badge" /></a></span>
[![CircleCI](https://circleci.com/gh/Juu-/ng8-apple-signin.svg?style=svg)](https://circleci.com/gh/Juu-/ng8-apple-signin)

<!-- /BADGES -->
An Angular 8 component for Apple Sign In o/
**This library is still under construction.**

------------

### Contributing
Feel free to open issues and pull requests. If you would like to be one of the core creators of this library, please reach out to me at julien.catania@gmail.com

------------

### <a name="gstart">Getting Started</a>
1 - Download the library using npm `npm install --save ng8-apple-signin`

2 - Declare the library in your main module
  ```typescript
    import {NgModule} from '@angular/core';
    import {BrowserModule} from '@angular/platform-browser';
    import { AppleSigninModule } from 'ng8-apple-signin'
  
    @NgModule({
      declarations: [...],
      imports: [
        BrowserModule,
        AppleSigninModule
      ],
      bootstrap: [...]
    })
    export class AppModule {
    }
  ``` 
3 - Add the Apple JavaScript file in your index.html
  ```html
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>My App</title>
      <base href="/">
    
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"></script>
    
    </head>
    <body>
      [...]
    </body>
    </html>
  ```
4 - Just call the component
  ```html
     <apple-signin [state]="yourStateVar" [redirectURI]="yourRedirectURIVar" [scope]="yourScopeVar" [clientId]="yourClientIdVar" color="light" type="sign up"></apple-signin>
 ``` 
_4.1 - This is how Color Enum and Type Enum looks like_
 ```typescript
enum Color {
  black = 'black',
  light = 'light'
}
enum Type {
  SignIn = 'sign in',
  SignUp = 'sign up',
  Apple = 'apple',
  Continue = 'continue'
}
```
  
5 - Enjoy it !

------------

To do list:
  1. Change the Apple Javascript import to the project itself (step 3 will be deleted)
