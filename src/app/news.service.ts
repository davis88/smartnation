import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { WebSocketSubject } from "rxjs/Observable/dom/WebSocketSubject"
import 'rxjs/add/observable/dom/webSocket'
import { EventEmitter } from "@angular/core";
import { News} from "./news.model"

export class NewsService {

    news = new EventEmitter<News>()
    currentNews = {}

    
    newsEvent: WebSocketSubject<any>;
    wsSubscription: Subscription;
    ws :string = "ws://172.27.244.126:8080/topnews/event"

    constructor() {
        this.newsEvent = Observable.webSocket(this.ws)
        this.wsSubscription = this.newsEvent.subscribe(
            (data) => { 
                console.log(">>>> Data",data)
                // content = data.payload
                if (data.type == "news") {
                    this.currentNews = data.payload
                    this.news.emit(data.payload)
                }
            },
            (error) => { console.log(">>>> error", error) },
            () => { console.log(">>>> Closed")}

        )
    }



}