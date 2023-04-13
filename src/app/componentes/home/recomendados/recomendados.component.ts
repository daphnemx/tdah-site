import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import articleContent from '../../../../assets/contenido/articulos.json';
import { ArticleService } from '../../../services/article.service';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-recomendados',
  templateUrl: './recomendados.component.html',
  styleUrls: ['./recomendados.component.css'],
  providers: [ArticleService],
})
export class RecomendadosComponent implements OnInit {
  articlesContent: Article[] = [];

  constructor(private router: Router, private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe((articles) => (this.articlesContent = articles));
  }

  navigateToArticle(article) {
    console.log('Selected article:', article);
    this.router.navigate(['/articulo', article.id]);
  }
}
