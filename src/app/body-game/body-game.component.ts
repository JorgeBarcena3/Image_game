import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import {  Utils } from "../utils/utils"
import { WeolcomeDialogComponent } from '../weolcome-dialog/weolcome-dialog.component';
import CONFIG from '../../assets/confing.json'

enum SCREENS {
  WELCOME,
  GAMING,
  FINISH
}


@Component({
  selector: 'app-body-game',
  templateUrl: './body-game.component.html',
  styleUrls: ['./body-game.component.css']
})
export class BodyGameComponent implements AfterViewInit {

  @ViewChild('container', { read: ViewContainerRef })  
  container!: ViewContainerRef;  
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private cdRef:ChangeDetectorRef) { };

  welcomePanelComponent! : ComponentRef<WeolcomeDialogComponent>;
  startButtonComponent! : ComponentRef<ButtonComponent>;
  
  initComponents()
  {
    console.log(this.container);
    this.welcomePanelComponent = Utils.createComponent(this.componentFactoryResolver, this.container, WeolcomeDialogComponent);
    this.startButtonComponent = Utils.createComponent(this.componentFactoryResolver, this.container, ButtonComponent);
    this.startButtonComponent.instance.callback = this.playGame;
  }

  setScreen(screen : SCREENS)
  {
    switch(screen)
    {
      case SCREENS.WELCOME:
      {
        this.welcomePanelComponent.instance.moveTo("7vw");
        this.startButtonComponent.instance.moveTo("27vw");
        break;
      }
    }
  }

  ngAfterViewInit()
  {
    this.initComponents();
    this.cdRef.detectChanges()
    setTimeout(() => {
      this.setScreen(SCREENS.WELCOME);
    }, CONFIG.timeStartGame); 
  }

  playGame()
  { 
    
    Utils.moveToTheLeft("playButtonContainer", "200vw");
    Utils.moveToTheLeft("welcomeDialogContainer", "200vw");

  }

  

}
