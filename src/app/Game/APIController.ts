import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'; 
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' }) 
export class APIController {

    static BASE_API_URL : string = "https://api.arasaac.org/api/pictograms";
    static GET_PICTOGRAMS_URL : string = APIController.BASE_API_URL + "/en/new/";
    static GET_IMAGE : string = APIController.BASE_API_URL + "/";

    imagesData = {};

    constructor(private http: HttpClient)
    {

    }

    public initApiControler()
    {
        this.getImages().subscribe(data => { this.imagesData = data; console.log(data)});
    }

    /** GET Images from the server */
    private getImages(): Observable<{}> {
        return this.http.get<{}>(APIController.GET_PICTOGRAMS_URL + 30);
    }

    private getImageById(id : string): Observable<{}>
    {
        return this.http.get<{}>(APIController.GET_IMAGE + id);
    }

    public getImageFromPool()
    {
        
    }

    
  }