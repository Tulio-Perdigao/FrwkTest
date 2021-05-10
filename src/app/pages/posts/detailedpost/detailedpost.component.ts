import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comment } from 'src/app/common/models/Comment';
import { PostsService } from 'src/app/common/services/posts.service';

@Component({
  selector: 'app-detailedpost',
  templateUrl: './detailedpost.component.html',
  styleUrls: ['./detailedpost.component.css']
})
export class DetailedpostComponent implements OnInit {

  commentList: Comment[] = []

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getCommentsFromPost(this.data.post.id).then(
      (data) => { this.commentList = data; }
    )
  }
}
