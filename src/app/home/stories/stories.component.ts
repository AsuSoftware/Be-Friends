import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addStory(): void {
    document.getElementById('file').click();
  }

}
