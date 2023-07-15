
import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/Post';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  latestPosts: Post[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.latestPosts(5).subscribe(res => {
      res.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
      this.latestPosts = [...res];
    })
  }
}
