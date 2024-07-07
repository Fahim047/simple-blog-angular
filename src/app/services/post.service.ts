import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostType } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get<PostType[]>(this.baseUrl + 'posts');
  }
}
