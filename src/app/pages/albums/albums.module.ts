import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { DetailedalbumComponent } from './detailedalbum/detailedalbum.component';



@NgModule({
  declarations: [AlbumsComponent, DetailedalbumComponent],
  imports: [
    CommonModule
  ]
})
export class AlbumsModule { }
