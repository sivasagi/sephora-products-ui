import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {mainState} from '../store/states/main-state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sephora app';
  constructor(){
  	
  }

}
