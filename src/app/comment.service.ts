import { HttpClient,HttpHeaders,HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CommentService {

    commentUrl: string = "http://172.27.244.126:8080/topnews/comment"

    constructor(private httpClient:HttpClient) {
    }

    postComment(title:string, name:string, comment:string) {
        console.log("Comment Posted for %s : Commend %s By Name: ", title, comment, name)

        const header = new HttpHeaders()
        .set("Content-Type", "application/x-www-form-urlencoded")
        
        const body = new HttpParams()
            .set('title', title)
            .set('name', name)
            .set('comment', comment)

        this.httpClient.post(
            this.commentUrl,
            body.toString(),
            {headers: header}
        ).subscribe(
            (data) => {
             console.log(">> Success",data)   
            },
            (error) => {
                console.log(">> Error",error)   
            },
            () => {}
        )
    }
}