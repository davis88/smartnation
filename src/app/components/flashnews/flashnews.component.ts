import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../news.model';
import { NewsService } from '../../news.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-flashnews',
  templateUrl: './flashnews.component.html',
  styleUrls: ['./flashnews.component.css']
})
export class FlashnewsComponent implements OnInit {

  @Input()
  news: News

  constructor() { }

  ngOnInit() {
    
  }
  
}
