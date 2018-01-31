import { Component, OnInit,ViewChild,Output } from '@angular/core';
import { NgForm } from "@angular/forms";
import { EventEmitter } from '@angular/core';

import { Comment} from "../../comment.model"

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @ViewChild("commentForm")
  commentForm: NgForm

  @Output()
  commentToPost = new EventEmitter<Comment>()

  constructor() { }

  ngOnInit() {
  }

  processForm(): void {
   console.log(this.commentForm.value.name) 
   console.log(this.commentForm.value.comment)
   this.commentToPost.emit({
     name: this.commentForm.value.name,
     comment: this.commentForm.value.comment
   })
   this.commentForm.reset();
  }

}
