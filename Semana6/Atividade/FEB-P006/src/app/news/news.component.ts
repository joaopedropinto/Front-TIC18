import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: string[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.findNews();
  }

  findNews() {
    this.newsService.getNews().subscribe(
      (data: any) => {
        this.news = data.articles.slice(0, 5).map((article: any) => article.title);
      },
      (err: HttpErrorResponse) => {
        console.error('Erro ao obter notícias:', err);
      }
    );
  }
}
