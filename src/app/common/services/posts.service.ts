import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url: string = 'https://jsonplaceholder.typicode.com';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(public http: HttpClient) { }

  async getPosts(): Promise<Post[]> {
    try {
      return this.http.get<Post[]>(this.url + '/posts').toPromise();
    } catch (err) {
      return err;
    } 
  }

  async getPost(postId: number): Promise<Post[]> {
    try {
      return this.http.get<Post[]>(this.url + '/posts/' + postId).toPromise();
    } catch (err) {
      return err;
    } 
  }

  async addPost(post: Post): Promise<any> {
    try {
      return this.http.post<any>(this.url + '/posts', post, this.httpOptions).toPromise();
    } catch (err) {
      return err;
    }
  }

  async editPost(post: Post): Promise<any> {
    try {
      return this.http.put<any>(this.url + '/posts/' + post.id, post, this.httpOptions).toPromise();
    } catch (err) {
      return err;
    }
  }

  async deletePost(postId: number): Promise<any> {
    try {
      return this.http.delete<any>(this.url + '/posts/' + postId, this.httpOptions).toPromise();
    } catch (err) {
      return err;
    }
  }

  async getCommentsFromPost(postId: number): Promise<Comment[]> {
    try {
      return this.http.get<Comment[]>(this.url + '/posts/' + postId + '/comments').toPromise();
    } catch (err) {
      return err;
    }
  }


}
