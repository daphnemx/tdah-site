import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articlesUrl = '../../assets/contenido/articulos.json';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http
      .get<Article[]>(this.articlesUrl)
      .pipe(catchError(this.handleError<Article[]>('getArticles', [])));
  }

  /*getArticleById(id: number): Observable<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get<Article>(url).pipe(
      catchError(this.handleError<Article>(`getArticleById id=${id}`))
    );
  }*/

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article[]>('assets/contenido/articulos.json').pipe(
      map((articles) => articles.find((article) => article.id === id)),
      catchError(this.handleError<Article>(`getArticleById id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
