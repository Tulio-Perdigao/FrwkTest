import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/components/header/header.component';
import { DevComponent } from './common/components/dev/dev.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { TodosComponent } from './pages/todos/todos.component';
import { DetailedpostComponent } from './pages/posts/detailedpost/detailedpost.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material';
import { DetailedalbumComponent } from './pages/albums/detailedalbum/detailedalbum.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DevComponent,
    NavbarComponent,
    PostsComponent,
    AlbumsComponent,
    TodosComponent,
    DetailedpostComponent,
    DetailedalbumComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    DragDropModule
  ],
  providers: [],
  entryComponents: [DetailedpostComponent, DetailedalbumComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
