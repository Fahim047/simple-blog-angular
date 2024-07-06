import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostType } from '../../types';
import { Observable } from 'rxjs';

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
