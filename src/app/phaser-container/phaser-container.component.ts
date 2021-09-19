import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils/utils';
import Phaser from 'phaser';
import { MainScene } from '../Game/MainScene';
import { APIController } from '../Game/APIController';

@Component({
  selector: 'app-phaser-container',
  templateUrl: './phaser-container.component.html',
  styleUrls: ['./phaser-container.component.css']
})
export class PhaserContainerComponent implements OnInit {
  

  phaserGame!: Phaser.Game;
  config!: Phaser.Types.Core.GameConfig;
  scene! : MainScene;
  callbackFinish! : Function;

  constructor(private myAPIController: APIController) 
  {

  }

  moveTo(position : string)
  {
    Utils.moveToTheLeft("phaserContainer", position);
  };

  async ngOnInit() {

    

  }

  public async play()
  {
    this.scene = new MainScene(this.myAPIController, this);
    await this.scene.initAPiController();

    this.config = {
      type: Phaser.AUTO,
      scene:  this.scene,
      parent: 'phaserContainer',
      render: { transparent: true },
      scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaserContainer',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    }
    };

    this.phaserGame = new Phaser.Game(this.config);
  }

  finishGame() {
    this.phaserGame.destroy(true);
    this.callbackFinish();
  }
}
