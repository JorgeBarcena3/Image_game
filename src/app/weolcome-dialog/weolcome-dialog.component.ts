import { Component, AfterViewInit } from '@angular/core';
import CONFIG from '../../assets/confing.json'

@Component({
  selector: 'app-weolcome-dialog',
  templateUrl: './weolcome-dialog.component.html',
  styleUrls: ['./weolcome-dialog.component.css']
})
export class WeolcomeDialogComponent implements AfterViewInit {

  ngAfterViewInit () {
    let welcomeDialogTest = document.getElementById("welcomeDialogContainer");

    setTimeout(() => {  
      if( welcomeDialogTest ) welcomeDialogTest.style.left = "7vw";      
    }, CONFIG.timeAnimationToSpawn);    

  }

  welcomeDialog = "WELCOME TO THE IMAGES GAME!<br><br> Get the highest possible score, for this you must type the first letter of the images that appear on the screen. <br> But beware! <br> If the images reach the right side of the screen, your game will end."

}
