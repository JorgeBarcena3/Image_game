import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import {  Utils } from "../utils/utils"
import { DialogComponent } from '../dialog-panel/dialog-panel.component';
import LANG from '../../assets/lang.json'
import CONFIG from '../../assets/confing.json'
import { PhaserContainerComponent } from '../phaser-container/phaser-container.component';

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

  welcomePanelComponent! : ComponentRef<DialogComponent>;
  startButtonComponent! : ComponentRef<ButtonComponent>;
  phaserContainerComponent! : ComponentRef<PhaserContainerComponent>;
  finishPanelComponent! : ComponentRef<DialogComponent>;
  finishButtonComponent! : ComponentRef<ButtonComponent>;
  
  initComponents()
  {
    this.welcomePanelComponent = Utils.createComponent(this.componentFactoryResolver, this.container, DialogComponent);
    this.welcomePanelComponent.instance.dialogText = LANG.howToPlayText;
    this.welcomePanelComponent.instance.className = "welcomePanel";

    this.startButtonComponent = Utils.createComponent(this.componentFactoryResolver, this.container, ButtonComponent);
    this.startButtonComponent.instance.callback = () => { this.playGame(); };
    this.startButtonComponent.instance.buttonText = LANG.playButtonText;
    this.startButtonComponent.instance.className = "welcomeButton";

    this.phaserContainerComponent = Utils.createComponent(this.componentFactoryResolver, this.container, PhaserContainerComponent);
    this.phaserContainerComponent.instance.callbackFinish = (points : number) => { this.finishGame(points); };

    this.finishPanelComponent = Utils.createComponent(this.componentFactoryResolver, this.container, DialogComponent);
    this.finishPanelComponent.instance.className = "finishPanel";

    this.finishButtonComponent = Utils.createComponent(this.componentFactoryResolver, this.container, ButtonComponent);
    this.finishButtonComponent.instance.callback = () => { this.restartGame(); };
    this.finishButtonComponent.instance.buttonText = LANG.restartButtonText;
    this.finishButtonComponent.instance.className = "finishButton";


  }

  setScreen(screen : SCREENS)
  {
    switch(screen)
    {
      case SCREENS.WELCOME:
      {
        this.welcomePanelComponent.instance.moveTo("7vw");
        this.startButtonComponent.instance.moveTo("27vw");
        this.phaserContainerComponent.instance.moveTo("-200vw");
        this.finishPanelComponent.instance.moveTo("-200vw");
        this.finishButtonComponent.instance.moveTo("-200vw");
        break;
      }
      case SCREENS.GAMING:
      {
        this.welcomePanelComponent.instance.moveTo("-200vw");
        this.startButtonComponent.instance.moveTo("-200vw");
        this.phaserContainerComponent.instance.moveTo("0vw");
        this.finishPanelComponent.instance.moveTo("-200vw");
        this.finishButtonComponent.instance.moveTo("-200vw");
        break;
      }
      case SCREENS.FINISH:
      {
        this.welcomePanelComponent.instance.moveTo("-200vw");
        this.startButtonComponent.instance.moveTo("-200vw");
        this.phaserContainerComponent.instance.moveTo("-200vw");
        this.finishPanelComponent.instance.moveTo("7vw");
        this.finishButtonComponent.instance.moveTo("22vw");
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
      // this.setScreen(SCREENS.GAMING);
      // this.playGame();
    }, CONFIG.timeStartGame); 
  }

  playGame()
  { 
    
    this.setScreen(SCREENS.GAMING);
    this.phaserContainerComponent.instance.play();

  }

  finishGame(points : number)
  {
    this.setScreen(SCREENS.FINISH);
    this.finishPanelComponent.instance.dialogText = LANG.pointsText + Math.floor(points);

  }

  restartGame()
  {
    this.setScreen(SCREENS.WELCOME);

  }

  

}
