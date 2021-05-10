import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Post } from 'src/app/common/models/Post';
import { User } from 'src/app/common/models/User';
import { PostsService } from 'src/app/common/services/posts.service';
import { UsersService } from 'src/app/common/services/users.service';
import { DetailedpostComponent } from './detailedpost/detailedpost.component';

export class PostDetails {
  post: Post;
  user: User;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postDetailsList: PostDetails[] = []

  constructor(public postsService: PostsService, public usersService: UsersService,
     public dialog: MatDialog) { }

  ngOnInit() {
    Promise.all([
      this.postsService.getPosts(),
      this.usersService.getUsers(),
    ]).then((data) => {
      data[0].forEach((reg) => {
        this.postDetailsList.push({post: reg, user: data[1].find((x) => x.id === reg.userId) });
      });
     });
  }

  openDetailsComponent(data: PostDetails) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    dialogConfig.width = '60%';
    dialogConfig.height = '70%';

    const dialogRef = this.dialog.open(DetailedpostComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
