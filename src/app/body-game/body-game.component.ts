import { AfterViewInit, Component } from '@angular/core';
import CONFIG from '../../assets/confing.json'
import { Utils } from "../utils/utils"

@Component({
  selector: 'app-body-game',
  templateUrl: './body-game.component.html',
  styleUrls: ['./body-game.component.css']
})
export class BodyGameComponent implements AfterViewInit  {

  playButtonText = "PLAY";

  ngAfterViewInit () {
    let welcomeDialogTest = document.getElementById("playButtonContainer");

    setTimeout(() => {  
      if( welcomeDialogTest ) welcomeDialogTest.style.left = "27vw";      
    }, CONFIG.timeAnimationToSpawn);    

  }
  
  playGame()
  {    
    Utils.moveToTheLeft("playButtonContainer", "200vw");
    Utils.moveToTheLeft("welcomeDialogContainer", "200vw");
  }

  

}
