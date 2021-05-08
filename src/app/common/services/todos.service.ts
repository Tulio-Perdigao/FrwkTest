import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from '../models/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private url: string = 'https://jsonplaceholder.typicode.com';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(public http: HttpClient) { }


  async getToDos(): Promise<ToDo[]> {
    try {
      return this.http.get<ToDo[]>(this.url + '/todos').toPromise();
    } catch (err) {
      return err;
    }
  }
  
}
