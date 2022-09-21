import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  num:number = 0;
  width = "200px";
  height = "300px";
  color = "yellow";
  nums:number[] = [2, 3, 1, 7, 2]
  blogs:Blog[] = [
    {
      title: "Mukbang",
      description: "eating much much",
      published: false,
      authorActive: true
    },
    {
      title:"wala akong maisip",
      description: "...",
      published: true,
      authorActive: true
    },
    {
      title:"kahit ano",
      description: "basta...",
      published: true,
      authorActive: true
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  loveAction(blog:Blog) {
    console.log(blog);
  }

  incrementNumber() {
    this.num++;
  }

  changeCss(){
    this.width = "200px";
    this.height = "300px";
    this.color = "red";
  }

}
