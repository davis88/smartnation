import { Component, OnInit } from '@angular/core';
import { News } from '../../news.model';
import { ExternalNewsService } from '../../ExternalNews.service';

@Component({
  selector: 'app-live-news',
  templateUrl: './live-news.component.html',
  styleUrls: ['./live-news.component.css']
})
export class LiveNewsComponent implements OnInit {

  sample: News[] = []

  /*
  sample: News = {
    link: "http://www.google.com",
    title: "News title",
    description: "News desc", 
    thumbnail: "http://c.files.bbci.co.uk/105BC/production/_99440076_loganpaul.png", 
    pubdate: "News date", 
  }
  */

  constructor(private externalNewsScv: ExternalNewsService) { }

  ngOnInit() {
    this.externalNewsScv.getNews()
    .then((result) => {
      console.log(">>> result", result)
      result.articles.forEach(item => {
        
        let data = {
          title: item.title,
          link: item.link,
          description: item.description,
          pubdate: item.publishedAt,
          thumbnail: item.urlToImage
        }
        this.sample.push(data)

      });
    })
    .catch((error) => {
      console.log(">>> error", error)
    })
  }

}
