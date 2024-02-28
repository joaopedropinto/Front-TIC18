import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'b6d0a095694e47688abb7b023ccd1aff';

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    const apiUrl = `https://newsapi.org/v2/everything?q=science&apiKey=${this.apiKey}&language=pt`;
    return this.http.get(apiUrl);
  }
}
