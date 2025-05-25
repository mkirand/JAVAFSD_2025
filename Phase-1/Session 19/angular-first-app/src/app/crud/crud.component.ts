import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  posts: any = [];

  constructor(private service: PostService) { }

  ngOnInit(): void {

    // this.service.getPosts().subscribe(results => { this.posts = results })
    this.getPosts();

  }

  getPosts = () => {
    this.service.getPosts().subscribe(results => { this.posts = results });
  }

  addPost = () => {
    let post = { title: "First Post", description: "And some small print.", author: "Manoj Kiran Das", date: new Date() }
    this.service.addPost(post).subscribe(() => this.getPosts());
  }

}
