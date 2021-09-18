import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'; 
import { Observable } from "rxjs";
import { Pictograms } from "./PictogramModel";
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' }) 
export class APIController {

    static BASE_API_URL : string = "https://api.arasaac.org/api/pictograms";
    static GET_PICTOGRAMS_URL : string = APIController.BASE_API_URL + "/en/new/";
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
                    console.log(this.imagesData); 
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
        return this.http.get<{}>(APIController.GET_PICTOGRAMS_URL + 30);
    }


    public getImageFromPool()
    {
        // debugger;
        // Buscamos nuevas imagenes y las añadimos al pool
        if(this.imagesData.length < 10) 
        {

        }

        let index = this.getRandomInt(0, this.imagesData.length);

        let imageInfo = this.imagesData[index];
        this.imagesData.splice(index, 1);
        return APIController.GET_IMAGE + imageInfo._id;

    }

    private getRandomInt(min : integer, max : integer) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

    
  }