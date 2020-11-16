import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  loveState = false;
  commentState = false;
  posts = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAdoreClick(): void {
    this.loveState = !this.loveState;
  }

  onClickComment(): void {
    this.commentState = !this.commentState;
  }

  addComment(): void {
    // verify the comment and if is present..send to the server with thwe user id and comment
  }

}
