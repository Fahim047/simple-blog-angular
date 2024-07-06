import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostType } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseUrl = 'https://localhost/3000/';

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<PostType[]> {
    return this.http.get<PostType[]>(this.baseUrl + 'posts');
  }
}
