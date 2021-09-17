import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weolcome-dialog',
  templateUrl: './weolcome-dialog.component.html',
  styleUrls: ['./weolcome-dialog.component.css']
})
export class WeolcomeDialogComponent {

  welcomeDialog = "WELCOME TO THE IMAGES GAME!<br><br> Get the highest possible score, for this you must type the first letter of the images that appear on the screen. <br> But beware! <br> If the images reach the right side of the screen, your game will end."
  constructor() { }

}
