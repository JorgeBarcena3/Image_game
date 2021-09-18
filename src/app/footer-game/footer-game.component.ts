import { Component, OnInit } from '@angular/core';
import LANG from '../../assets/lang.json'

@Component({
  selector: 'app-footer-game',
  templateUrl: './footer-game.component.html',
  styleUrls: ['./footer-game.component.css']
})
export class FooterGameComponent {

  copyrightText = LANG.copyrightText;

  constructor ()
  {}

}
