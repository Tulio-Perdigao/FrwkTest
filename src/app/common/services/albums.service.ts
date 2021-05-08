import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../models/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private url: string = 'https://jsonplaceholder.typicode.com';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(public http: HttpClient) { }

  async getAlbums(): Promise<Album[]> {
    try {
      return this.http.get<Album[]>(this.url + '/albums').toPromise();
    } catch (err) {
      return err;
    }
  }
}
