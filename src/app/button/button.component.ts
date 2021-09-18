import {  Component, Input } from '@angular/core';
import { Utils } from '../utils/utils';
import { AfterViewInit } from '@angular/core';
import LANG from '../../assets/lang.json'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements AfterViewInit {

  @Input() callback!: Function;

  playButtonText! : string;
  
  constructor() { }
  
  ngAfterViewInit()
  {
    setTimeout(() => {
      this.playButtonText = LANG.playButtonText
    }, 0); 
  }

  moveTo(position : string)
  {
    Utils.moveToTheLeft("playButtonContainer", position);
  };

}
