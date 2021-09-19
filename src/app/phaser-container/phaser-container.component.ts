import { Component } from '@angular/core';
import { Utils } from '../utils/utils';
import Phaser from 'phaser';
import { MainScene } from '../Game/MainScene';
import { APIController } from '../Game/APIController';
import LANG from '../../assets/lang.json'

@Component({
  selector: 'app-phaser-container',
  templateUrl: './phaser-container.component.html',
  styleUrls: ['./phaser-container.component.css']
})
export class PhaserContainerComponent {
  

  phaserGame!: Phaser.Game;
  config!: Phaser.Types.Core.GameConfig;
  scene! : MainScene;
  callbackFinish! : Function;
  placeholder_text : string;

  constructor(private myAPIController: APIController) 
  {
    this.placeholder_text = LANG.placeholder_input;
  }

  moveTo(position : string)
  {
    Utils.moveToTheLeft("phaserContainer", position);
  };

  typeLetter(event: KeyboardEvent)
  {
    let value = (<HTMLInputElement>event.target).value;

    this.scene.typeLetter(value);

    (<HTMLInputElement>document.getElementById("input_letter")).value = "";   
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

  finishGame(points : number) {
    this.phaserGame.destroy(true);
    this.callbackFinish(points);
  }
}
