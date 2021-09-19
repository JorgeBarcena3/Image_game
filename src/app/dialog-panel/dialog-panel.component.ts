import { Component } from '@angular/core';
import { Utils } from '../utils/utils';

@Component({
  selector: 'dialog-panel', 
  templateUrl: './dialog-panel.component.html',
  styleUrls: ['./dialog-panel.component.css']
})
export class DialogComponent  {

  dialogText: string;
  className! : string;

  constructor()
  {
    this.dialogText = "";
  }

  moveTo(position : string)
  {
    Utils.moveToTheLeft(this.className, position);
  };

  setCenterText()
  {
    let htmlObj = document.getElementById(this.className);
    if(htmlObj)
      htmlObj.style.textAlign = "center";
  }



}
