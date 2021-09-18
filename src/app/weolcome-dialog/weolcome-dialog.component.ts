import { Component, AfterViewInit } from '@angular/core';
import CONFIG from '../../assets/confing.json'
import LANG from '../../assets/lang.json'
import { Utils } from '../utils/utils';

@Component({
  selector: 'app-weolcome-dialog',
  templateUrl: './weolcome-dialog.component.html',
  styleUrls: ['./weolcome-dialog.component.css']
})
export class WeolcomeDialogComponent implements AfterViewInit  {

  welcomeDialog: string;

  constructor()
  {
    this.welcomeDialog = "";
  }

  ngAfterViewInit ()
  {
    setTimeout(() => {
      this.welcomeDialog = LANG.howToPlayText;
    }, 0); 
  }

  moveTo(position : string)
  {
    Utils.moveToTheLeft("welcomeDialogContainer", position);
  };


}
