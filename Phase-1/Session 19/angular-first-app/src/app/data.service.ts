import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserClass } from './UserClass';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserClass[]> {
    return this.http.get<UserClass[]>(this.url + "/users");
  }

  getAllPosts(): Observable<UserClass[]> {
    return this.http.get<UserClass[]>(this.url + "/posts");
  }

}
