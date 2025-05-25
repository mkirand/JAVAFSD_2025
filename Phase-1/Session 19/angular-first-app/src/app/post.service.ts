import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = "http://localhost:3000/posts";

  constructor(private http: HttpClient) { }

  addPost(post: any): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
