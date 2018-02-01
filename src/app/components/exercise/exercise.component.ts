import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NewsService } from '../../news.service';
import { Comment } from '../../comment.model';
import { CommentService } from '../../comment.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  news = {
    link: "http://www.google.com",
    title: "News title",
    description: "News desc", 
    thumbnail: "http://c.files.bbci.co.uk/105BC/production/_99440076_loganpaul.png", 
    pubdate: "News date", 
  }

  private newsSub: Subscription;

  constructor(
    private newsService:NewsService, 
    private commentService:CommentService
  ) { }

  ngOnInit() {
    this.newsSub = this.newsService.news.subscribe(
      (data) => {
        this.news = data
        console.log(">>> News Arrives", data)
      }
    )
  }

  ngOnDestroy() {
    this.newsSub.unsubscribe();
  }

  commentPosted(comment:Comment) {
    console.log(">>> Comment, ",comment)
    this.commentService.postComment(this.news.title, comment.name, comment.comment)
  }
}
