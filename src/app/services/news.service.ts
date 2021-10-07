import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsApiKey = 'a527da39d0fc4d7a8b66ce4f2d5fe039';
  navbarCollapserState = new Subject<boolean>();
  headlineDetails = new BehaviorSubject<Article>({
    author: '',
    description: '',
    publishedAt: '',
    source: {
        id: '',
        name:'',
    },
    title: '',
    url: '',
    urlToImage: '',
    content: ''
  });

  searchedNews = new BehaviorSubject<any>(null);


  
  

  constructor(private http: HttpClient) { }

  getHeadlines() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.newsApiKey}`);
  }

  searchNews(query: string) {
    return this.http.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${this.newsApiKey}`);
  }
  
  categoryNews(category: string){
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${this.newsApiKey}`);
  }

  countryNews(country: string){
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${this.newsApiKey}`);
  }
}
