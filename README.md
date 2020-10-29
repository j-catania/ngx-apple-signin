# Angular8+ Apple Sign In component 
An Angular 8+ component for Apple Sign In \o/

[![NPM Version](https://img.shields.io/npm/v/ngx-apple-signin.svg)](https://npmjs.org/package/ngx-apple-signin)
[![NPM Version](https://img.shields.io/npm/dm/ngx-apple-signin.svg)](https://npmjs.org/package/ngx-apple-signin)
[![Dependencies Badge](https://david-dm.org/Juu-/ngx-apple-signin/status.svg)](https://david-dm.org/Juu-/ngx-apple-signin)
[![Dev Dependencies Badge](https://david-dm.org/Juu-/ngx-apple-signin/dev-status.svg)](https://david-dm.org/Juu-/ngx-apple-signin?type=dev)

### Contributing
Feel free to open issues and pull requests. If you would like to be one of the core creators of this library, please reach out to me at julien.catania@gmail.com

### Component versions matches Angular versions
| Angular version 	| NPM version 	| NPM install command                   	|
|-----------------	|-------------	|---------------------------------------	|
| 8.x.x           	| 8.0.0       	| `npm install ngx-apple-signin@8.0.0`  	|
| 9.x.x           	| 9.0.0       	| `npm install ngx-apple-signin@9.0.0`  	|
| 10.x.x          	| 10.0.0      	| `npm install ngx-apple-signin@10.0.0` 	|


### Getting Started
1 - Download the library using npm `npm install ngx-apple-signin`

2 - Declare the library in your main module
  ```typescript
    import {NgModule} from '@angular/core';
    import {BrowserModule} from '@angular/platform-browser';
    import { AppleSigninModule } from 'ngx-apple-signin'
  
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
     <apple-signin   [state]="yourStateVar"
                     [redirectURI]="yourRedirectURIVar"
                     [scope]="yourScopeVar"
                     [clientId]="yourClientIdVar"
                     color="light"
                     type="sign up"></apple-signin>
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
