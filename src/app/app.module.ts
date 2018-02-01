import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule  } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CommentComponent } from './components/comment/comment.component';
import { FlashnewsComponent } from './components/flashnews/flashnews.component';
import { NewsService } from './news.service';
import { CommentService } from './comment.service';
import { LiveNewsComponent } from './components/live-news/live-news.component';
import { ExerciseComponent } from './components/exercise/exercise.component';

import { RouterModule,Routes } from "@angular/router";
import { ExternalNewsService } from './ExternalNews.service';

const routes : Routes = [
  {path: "", component: ExerciseComponent },
  {path: "home", component: ExerciseComponent },
  {path: "exercise", component: ExerciseComponent },
  {path: "live", component: LiveNewsComponent },
  {path: "**", redirectTo:"/", pathMatch:"full" }
]

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    FlashnewsComponent,
    LiveNewsComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    NewsService,
    CommentService,
    ExternalNewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
