import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AlbumsService } from 'src/app/common/services/albums.service';

@Component({
  selector: 'app-detailedalbum',
  templateUrl: './detailedalbum.component.html',
  styleUrls: ['./detailedalbum.component.css']
})
export class DetailedalbumComponent implements OnInit {

  albumPhotos: any = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public albumsService: AlbumsService) { }

  ngOnInit() {
    this.albumsService.getAlbumPhotos(this.data.album.id).then(
      (data) => { this.albumPhotos = data; }
    )
  }

}
