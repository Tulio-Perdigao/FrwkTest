import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from '../models/ToDo';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private url: string = 'https://jsonplaceholder.typicode.com';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(public http: HttpClient) { }

  async getUsers(): Promise<User[]> {
    try {
      return this.http.get<User[]>(this.url + '/users').toPromise();
    } catch (err) {
      return err;
    } 
  }
  
  async getUserTodos(userId: number): Promise<ToDo[]> {
    try {
      console.log(this.url + '/users/' + userId + '/todos');
      return this.http.get<ToDo[]>(this.url + '/users/' + userId + '/todos').toPromise();
    } catch (err) {
      return err;
    } 
  }

}
