import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addImage(): void { // Click to the + for add images using input type = file
    document.getElementById('file').click();
  }

  createPost(): void {
    // verify if input is complete
    // if is complete..send to the server
  }

}
