import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'; 
import { Observable } from "rxjs";
import CONFIG from '../../assets/confing.json'
import { Utils } from "../utils/utils";

@Injectable({ providedIn: 'root' }) 
export class APIController {

    static BASE_API_URL : string = "https://api.arasaac.org/api/pictograms";
    static GET_PICTOGRAMS_URL : string = APIController.BASE_API_URL + "/" + CONFIG.API_lang + "/new/";
    static GET_IMAGE : string = APIController.BASE_API_URL + "/";

    imagesData : any = [];

    constructor(private http: HttpClient)
    {

    }

    public async initApiControler()
    {
        return new Promise( (resolve,reject) =>{
            this.getImages().subscribe( 
                (response) => 
                { 
                    this.imagesData = response;  
                    resolve("Resolved");
                }, 
                () => 
                {
                    reject("Rejected")
                }
                )

            });
    }

    /** GET Images from the server */
    private getImages(): Observable<{}> {
        return this.http.get<{}>(APIController.GET_PICTOGRAMS_URL + CONFIG.imagesToDownload);
    }


    public getImageFromPool()
    {

        let index = Utils.generateRandom(0, this.imagesData.length);

        let imageInfo = this.imagesData[index];
        this.imagesData.splice(index, 1);
        imageInfo.img_URL = APIController.GET_IMAGE + imageInfo._id;
        return imageInfo;

    }

    
  }