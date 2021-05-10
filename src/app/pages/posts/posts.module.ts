import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { MatCardModule } from '@angular/material/card';
import { DetailedpostComponent } from './detailedpost/detailedpost.component';


@NgModule({
  declarations: [PostsComponent, DetailedpostComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  entryComponents: [DetailedpostComponent]
})
export class PostsModule { }
