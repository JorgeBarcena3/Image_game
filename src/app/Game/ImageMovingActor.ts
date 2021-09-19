import { Utils } from "../utils/utils";
import { MainScene } from "./MainScene";
import CONFIG from '../../assets/confing.json'

export class ImageMovingActor
{

    private sprite!: Phaser.GameObjects.Sprite;

    constructor(public nameKey : string, public imageSRC : string, public sceneRef : MainScene)
    {
        sceneRef.load.image(this.nameKey, this.imageSRC);

    }

    update (time : number)
    {
        this.sprite.x += CONFIG.m_speed * time + 1;
    }

    public isAlive(limit : number)
    {
        return this.sprite.x > limit;
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