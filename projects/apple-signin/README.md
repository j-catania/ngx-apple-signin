# Angular 8 Apple Sign In component 

###### v0.0.9
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
4 - Just call the commponent
  ```html
    <apple-signin [state]="yourStateVar" [redirectURI]="yourRedirectURIVar" [scope]="yourScopeVar" [clientId]="yourClientIdVar"></apple-signin>
  ```
  
5 - Enjoy it !

------------

To do list:
  1. Change the Apple Javascript import to the project itself (step 3 will be deleted)
