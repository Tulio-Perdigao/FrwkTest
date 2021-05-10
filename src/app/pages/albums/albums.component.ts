import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Album } from 'src/app/common/models/Album';
import { User } from 'src/app/common/models/User';
import { AlbumsService } from 'src/app/common/services/albums.service';
import { UsersService } from 'src/app/common/services/users.service';
import { DetailedalbumComponent } from './detailedalbum/detailedalbum.component';

export class AlbumDetails {
  album: Album;
  user: User;
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albumDetailsList: AlbumDetails[] = [];

  constructor(public albumsService: AlbumsService, public usersService: UsersService, public dialog: MatDialog) { }

  ngOnInit() {
    Promise.all([      
      this.albumsService.getAlbums(),
      this.usersService.getUsers()
    ]).then((data) => {
      data[0].forEach((reg) => {
        this.albumDetailsList.push({album: reg, user: data[1].find((x) => x.id === reg.userId) });
      });
     });
  }

  openDetailsComponent(data: AlbumDetails) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    dialogConfig.width = '60%';
    dialogConfig.height = '70%';

    const dialogRef = this.dialog.open(DetailedalbumComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
