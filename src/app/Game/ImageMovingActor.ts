import { Utils } from "../utils/utils";
import { MainScene } from "./MainScene";
import CONFIG from '../../assets/confing.json'

export class ImageMovingActor
{
    private sprite!: Phaser.GameObjects.Sprite;
    imageSRC: string = "";
    letter: string = "";

    constructor(public nameKey : string, _imageSRC : any, public sceneRef : MainScene)
    {
        this.imageSRC = _imageSRC.img_URL;
        this.letter = _imageSRC.keywords[0].keyword;
        sceneRef.load.image(this.nameKey, this.imageSRC);

    }

    update (time : number)
    {
        this.sprite.x += CONFIG.m_speed * time + 1;
    }

    getLetter() {
        return this.letter[0].toUpperCase();
      }

    public isAlive(limit : number)
    {
        return this.sprite.x > limit;
    }

    public getXPosition() {
        return this.sprite.x;
      }

    public createSprite() {
        this.sprite = this.sceneRef.add.sprite(-100, Utils.generateRandom(100, 450), this.nameKey); 
        this.sprite.setScale(CONFIG.imagesScale);
        this.hide();
    }

    public show()
    {
        this.sprite.visible = true;
    }

    public hide()
    {
        this.sprite.visible = false;
    }
}