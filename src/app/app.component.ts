import { Component, OnInit } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'news';
  collapsed = false;
  
  constructor(private newsService: NewsService) {}

  ngOnInit(){
    this.newsService.navbarCollapserState.subscribe((res)=>{
      this.collapsed = res;
      console.log(this.collapsed);
      
    })
  }
}
