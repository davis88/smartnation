import { HttpClient,HttpHeaders,HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import "rxjs/add/operator/take";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ExternalNewsService {

    apiUrl: string = "https://newsapi.org/v2/top-headlines"
    // ?country=us&apiKey=
    API_KEY:string = "3d0bb646f3854748a40199bc643d8ccf"

    constructor(private httpClient:HttpClient) {
    }

    getNews(): Promise<any> {

        const header = new HttpHeaders()
        // .set("Content-Type", "application/application-json")
        
        const body = new HttpParams()
            .set('country', "us")
            .set('apiKey', this.API_KEY)

       return ( this.httpClient.get(
                this.apiUrl,
                { headers: header,
                  params:body
                } )
                .take(1)
                .toPromise()
              )
    }
}