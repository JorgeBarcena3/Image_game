import { Component, OnInit } from '@angular/core';
import { Injectable,ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-body-game',
  templateUrl: './body-game.component.html',
  styleUrls: ['./body-game.component.css']
})
export class BodyGameComponent  {

  playButtonText = "PLAY";
  
  playGame()
  {
    
    alert(document.getElementById("welcomeDialogText"));
    console.log(document.getElementById("welcomeDialogText"));
  }

  

}
