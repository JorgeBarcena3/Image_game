import { Injectable } from '@angular/core';

@Injectable()
export class Utils  {


  public static moveToTheLeft(id : string, value : string)
  {
    let dialogText = document.getElementById(id);
    if(dialogText) dialogText.style.left = value;
  }


}
