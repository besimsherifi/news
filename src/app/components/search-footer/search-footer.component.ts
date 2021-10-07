import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-search-footer',
  templateUrl: './search-footer.component.html',
  styleUrls: ['./search-footer.component.scss']
})
export class SearchFooterComponent implements OnInit {

  @Input() termsOfUse = '';
  @Input() privacyPolicy = '';
  @Input() aboutUs = '';
  @Input() hr: boolean = false;
  @Input() footerImage = '';
  @Input() version: 'search' | 'footer' = 'footer';

  categories: string[] = ['Business','Entertainment','Health','Science','Technology'];

  countries: {[key: string]: string} = {
    de: 'Germany',
    us: 'USA',
    ru:'Russia',
    fr:'France',
    tr:'Turkey'
}

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    console.log(this.countries);
    
  }

  onSubmit(form: NgForm){
    this.newsService.searchNews(form.value.query).subscribe((res:any) => {
      this.newsService.searchedNews.next(res.articles);      
    });
    this.newsService.navbarCollapserState.next(false);
  }

  onClick(category:string){
    this.newsService.categoryNews(category).subscribe((res:any)=>{
      this.newsService.searchedNews.next(res.articles);     
    });
    this.newsService.navbarCollapserState.next(false);
  }

  onCountry(country: string){
    this.newsService.countryNews(country).subscribe((res:any) => {
      this.newsService.searchedNews.next(res.articles);     
    });
    this.newsService.navbarCollapserState.next(false);
  }

}
