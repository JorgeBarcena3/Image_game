import {  Component } from '@angular/core';
import { Utils } from '../utils/utils';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {

  callback!: Function;

  buttonText! : string;
  className! : string;
  
  constructor() { }

  moveTo(position : string)
  {
    Utils.moveToTheLeft(this.className, position);
  };

}
