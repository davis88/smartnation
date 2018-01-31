import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule  } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CommentComponent } from './components/comment/comment.component';
import { FlashnewsComponent } from './components/flashnews/flashnews.component';
import { NewsService } from './news.service';
import { CommentService } from './comment.service';


@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    FlashnewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    NewsService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
