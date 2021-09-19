import { Injectable } from "@angular/core";
import { APIController } from "../Game/APIController"
import { ImageMovingActor } from "./ImageMovingActor";
import CONFIG from '../../assets/confing.json'
import { PhaserContainerComponent } from "../phaser-container/phaser-container.component";
@Injectable({ providedIn: 'root' }) 
export class MainScene extends Phaser.Scene {
    
  imagesPool = Array<ImageMovingActor>();
  acitveImages = Array<ImageMovingActor>();
  usedImages = Array<ImageMovingActor>();
  start : integer = 0;
  canvas! : HTMLCanvasElement;

  constructor(private myAPIController: APIController, private componentRef : PhaserContainerComponent) {
    super({ key: 'main' });
    this.respawnTime = CONFIG.respawnIntialTime;

  }

  public async initAPiController()
  {  
    await this.myAPIController.initApiControler();
  }

  async preload()
  {
    console.log("preload starts")

    for(let i = 0; i < CONFIG.imagesToDownload; i++)
      this.imagesPool.push(new ImageMovingActor( 'imageKey' + i, this.myAPIController.getImageFromPool(), this));
        
    console.log("preload ends")

  }

  async create() {

    console.log('create starts');

    this.canvas = this.sys.game.canvas;

    for(let i = 0; i < this.imagesPool.length; i++)
      this.imagesPool[i].createSprite();

    this.activeImage();
    this.start = this.deltaStart = this.getTime();
    
    console.log('create ends'); 

  }  

  update() {

    this.currentRrespawnTime += this.getDelta() / 1000;
    this.checkForRespawn(this.getElapsed() / 1000);
    
    for(let i = 0; i < this.acitveImages.length; i++)
    {
      
      if(this.acitveImages[i].isAlive(this.canvas.width))
      {
        this.finishGame();
        // break;
      }
        this.acitveImages[i].update(this.getElapsed() / 1000);
    }

  }

  currentRrespawnTime : number = 0;
  respawnTime : number;  

  private checkForRespawn(elapsedTime : number) {

    if(this.respawnTime > CONFIG.respawnLimitTime)
      this.respawnTime -= elapsedTime * ( CONFIG.respawnMultiplicator / 10000) ;
    
    if( this.currentRrespawnTime > this.respawnTime)
    {
      this.currentRrespawnTime = 0;
      this.activeImage();
    }
    
  }

  private finishGame()
  {

    this.scene.stop();
    this.componentRef.finishGame();

  }

  private activeImage(index : integer = 0)
  {

    let image = this.imagesPool[index];
    image.show();
    this.imagesPool.splice(index, 1);
    this.acitveImages.push(image);

  }

  private desactiveImage(index : integer = 0)
  {
    let image = this.acitveImages[index];
    image.hide();
    this.acitveImages.splice(index, 1);
    this.usedImages.push(image);
  }

  private getTime() {
    //make a new date object
    let d = new Date();

    //return the number of milliseconds since 1 January 1970 00:00:00.
    return d.getTime();
  }

  private getElapsed() {
    return this.getTime() - this.start;
  }

  deltaStart : number = 0;

  private getDelta() {

        let elapsed = this.getTime() - this.deltaStart;
        this.deltaStart = this.getTime();
        return elapsed;
  }

}

