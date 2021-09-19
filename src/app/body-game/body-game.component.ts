import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import {  Utils } from "../utils/utils"
import { WeolcomeDialogComponent } from '../weolcome-dialog/weolcome-dialog.component';
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

  welcomePanelComponent! : ComponentRef<WeolcomeDialogComponent>;
  startButtonComponent! : ComponentRef<ButtonComponent>;
  phaserContainerComponent! : ComponentRef<PhaserContainerComponent>;
  
  initComponents()
  {
    this.welcomePanelComponent = Utils.createComponent(this.componentFactoryResolver, this.container, WeolcomeDialogComponent);

    this.startButtonComponent = Utils.createComponent(this.componentFactoryResolver, this.container, ButtonComponent);
    this.startButtonComponent.instance.callback = () => { this.playGame(); };

    this.phaserContainerComponent = Utils.createComponent(this.componentFactoryResolver, this.container, PhaserContainerComponent);
    this.phaserContainerComponent.instance.callbackFinish = () => { this.finishGame(); };
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
        break;
      }
      case SCREENS.GAMING:
      {
        this.welcomePanelComponent.instance.moveTo("-200vw");
        this.startButtonComponent.instance.moveTo("-200vw");
        this.phaserContainerComponent.instance.moveTo("0vw");
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
    }, CONFIG.timeStartGame); 
  }

  playGame()
  { 
    
    this.setScreen(SCREENS.GAMING);
    this.phaserContainerComponent.instance.play();

  }

  finishGame()
  {
    this.setScreen(SCREENS.WELCOME);
  }

  

}
