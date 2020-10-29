import { Component, OnInit } from '@angular/core';
import { Parent } from './parent';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit extends Parent {

  constructor() { 
  	//const plop = new Parent();
  	super()
  }

  ngOnInit() {
  	super.ngOnInit();
  	console.log("AppComponent", document.getElementById("plop"))
  	//super()
  }

}
