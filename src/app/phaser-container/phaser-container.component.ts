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
  imageSRC! : string;

  constructor(private myAPIController: APIController) 
  {
    this.config = {
      type: Phaser.AUTO,
      scene: [ MainScene ],
      parent: 'phaserContainer',
      render: { transparent: true },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 100 }
        }
      }
    };

    this.initAPiController();

  }

  private async initAPiController()
  {
    await this.myAPIController.initApiControler();
    this.imageSRC = this.myAPIController.getImageFromPool();
  }

  moveTo(position : string)
  {
    Utils.moveToTheLeft("phaserContainer", position);
  };

  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }
}
