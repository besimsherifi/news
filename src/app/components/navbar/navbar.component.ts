import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  collapsed: boolean = false;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.navbarCollapserState.subscribe((res) => {
      this.collapsed = res;
    })
  }

  navbarToggler(){
    this.collapsed = !this.collapsed;
    this.newsService.navbarCollapserState.next(this.collapsed);
  }

}
