import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collapsed = false;
  topHeadlines: Article[] = [];

  constructor(
    private newsService: NewsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getTopHeadlines();
    this.newsService.navbarCollapserState.subscribe((res)=> {
      this.collapsed = res
    })
  }

  getTopHeadlines() {
    this.newsService.getHeadlines().subscribe((res:any) => {
      this.topHeadlines = res.articles
      // console.log(res);
    })
  }

  openNewsDetails(article: Article){
    this.newsService.headlineDetails.next(article);
    localStorage.setItem('choosenHeadline',JSON.stringify(article));
    this.router.navigate(['details/' + article.source.id]);
  }

}
