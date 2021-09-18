import { Component } from '@angular/core';
import LANG from '../../assets/lang.json'

@Component({
  selector: 'app-header-game',
  templateUrl: './header-game.component.html',
  styleUrls: ['./header-game.component.css']
})
export class HeaderGameComponent  {

  gameName = LANG.appTitle;

  constructor() {   }

}
