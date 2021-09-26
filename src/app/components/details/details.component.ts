import { Component, OnInit } from '@angular/core';
import { Router,NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/models/article';
import { NewsService } from 'src/app/services/news.service';

export let browserRefresh = false;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  collapsed = false;
  subscription: Subscription
  headlineDetails?: Article;

  constructor(
    private newsService: NewsService,
    private router: Router) { 
      this.subscription = router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          browserRefresh = !router.navigated;
        }
      });
    }

  ngOnInit(): void {
    this.newsService.headlineDetails.subscribe((res:any) => {
      if(browserRefresh == true){
        this.headlineDetails = res;
        console.log('1',this.headlineDetails);
    }else{
        let choosenHeadline = localStorage.getItem('choosenHeadline');
        if(choosenHeadline !=null ){
          this.headlineDetails = JSON.parse(choosenHeadline);
          console.log('2',this.headlineDetails); 
        } 
      }
    });
    this.newsService.navbarCollapserState.subscribe((res) => {
      this.collapsed = res;
    })
  }

}
